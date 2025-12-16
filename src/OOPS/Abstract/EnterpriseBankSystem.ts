// EnterpriseBankSystem.ts
// Node >= 18 recommended (for crypto.randomUUID). Compile with tsc then run with node.

// Imports

import { promises as fs } from "fs";
import * as path from "path";
import crypto from "crypto";


// Interfaces & Contracts

interface IAccountOperations {
  deposit(amount: number): Promise<void>;
  withdraw(amount: number): Promise<void>;
  transfer(targetId: string, amount: number): Promise<void>;
  showDetails(): void;
  getId(): string;
  toSerializable(): any; // for file persistence
}

interface IRepository<T> {
  save(entity: T): Promise<void>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

interface INotification {
  send(recipient: string, message: string): Promise<void>;
}


// Audit Service (global logging)


class AuditService {
  private static instance: AuditService;
  private auditFile: string;

  private constructor(auditFile = "audit_log.json") {
    this.auditFile = path.resolve(auditFile);
  }

  static getInstance(): AuditService {
    if (!AuditService.instance) AuditService.instance = new AuditService();
    return AuditService.instance;
  }

  async record(entry: { time: string; accountId?: string; message: string }) {
    const arr = await this.readAll();
    arr.push(entry);
    await fs.writeFile(this.auditFile, JSON.stringify(arr, null, 2), "utf8");
  }

  private async readAll(): Promise<any[]> {
    try {
      const content = await fs.readFile(this.auditFile, "utf8");
      return JSON.parse(content);
    } catch {
      return [];
    }
  }
}


// Notification Implementations (simulated)


class EmailNotifier implements INotification {
  async send(recipient: string, message: string) {
    // Simulate async email sending
    console.log(`✉️  Email to ${recipient}: ${message}`);
    await Promise.resolve();
  }
}
class SMSNotifier implements INotification {
  async send(recipient: string, message: string) {
    console.log(`📱 SMS to ${recipient}: ${message}`);
    await Promise.resolve();
  }
}


// Abstract BankAccount


abstract class BankAccount implements IAccountOperations {
  protected balance: number;
  protected transactions: string[] = [];
  protected readonly id: string;

  constructor(
    protected holderName: string,
    initialBalance: number,
    protected accountType: string
  ) {
    this.id = crypto.randomUUID();
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): Promise<void>;
  abstract withdraw(amount: number): Promise<void>;

  async transfer(targetId: string, amount: number): Promise<void> {
    throw new Error("Transfer must be implemented at service layer with repo access");
  }

  showDetails(): void {
    console.log(
      `--- ${this.accountType} Account ---\nID: ${this.id}\nHolder: ${this.holderName}\nBalance: ₹${this.balance.toFixed(
        2
      )}\n`
    );
  }

  protected log(details: string) {
    const time = new Date().toISOString();
    this.transactions.push(`${time} — ${details}`);
    AuditService.getInstance().record({ time, accountId: this.id, message: details }).catch(() => {});
  }

  getId(): string {
    return this.id;
  }

  toSerializable() {
    // default serializable representation: subclasses should extend
    return {
      id: this.id,
      holderName: this.holderName,
      balance: this.balance,
      accountType: this.accountType,
      transactions: this.transactions,
    };
  }

  protected restoreFromSerializable(obj: any) {
    if (obj.transactions) this.transactions = obj.transactions;
    if (typeof obj.balance === "number") this.balance = obj.balance;
  }

  showTransactions() {
    console.log(`📜 Transactions for ${this.holderName} (${this.id}):`);
    this.transactions.forEach((t) => console.log("  •", t));
  }
}


// Concrete Accounts


class SavingsAccount extends BankAccount {
  private interestRate = 4.0; // annual %

  constructor(holder: string, initBal: number) {
    super(holder, initBal, "Savings");
  }

  async deposit(amount: number) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
    this.log(`Deposit ₹${amount}`);
  }

  async withdraw(amount: number) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
    this.log(`Withdraw ₹${amount}`);
  }

  async applyInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    this.log(`Interest applied ₹${interest.toFixed(2)}`);
  }

  toSerializable() {
    return {
      ...super.toSerializable(),
      interestRate: this.interestRate,
    };
  }

  static fromSerializable(obj: any) {
    const acc = new SavingsAccount(obj.holderName, obj.balance || 0);
    acc.restoreFromSerializable(obj);
    return acc;
  }
}

class CurrentAccount extends BankAccount {
  private overdraftLimit = 10000;

  constructor(holder: string, initBal: number) {
    super(holder, initBal, "Current");
  }

  async deposit(amount: number) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
    this.log(`Deposit ₹${amount}`);
  }

  async withdraw(amount: number) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > this.balance + this.overdraftLimit) throw new Error("Overdraft limit exceeded");
    this.balance -= amount;
    this.log(`Withdraw ₹${amount}`);
  }

  toSerializable() {
    return {
      ...super.toSerializable(),
      overdraftLimit: this.overdraftLimit,
    };
  }

  static fromSerializable(obj: any) {
    const acc = new CurrentAccount(obj.holderName, obj.balance || 0);
    acc.restoreFromSerializable(obj);
    return acc;
  }
}

class BusinessAccount extends BankAccount {
  private feePercent = 1.5;

  constructor(holder: string, initBal: number) {
    super(holder, initBal, "Business");
  }

  async deposit(amount: number) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    const fee = (amount * this.feePercent) / 100;
    this.balance += amount - fee;
    this.log(`Deposit ₹${amount} (fee ₹${fee.toFixed(2)})`);
  }

  async withdraw(amount: number) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    const fee = (amount * this.feePercent) / 100;
    const total = amount + fee;
    if (total > this.balance) throw new Error("Insufficient funds after fee");
    this.balance -= total;
    this.log(`Withdraw ₹${amount} (fee ₹${fee.toFixed(2)})`);
  }

  toSerializable() {
    return {
      ...super.toSerializable(),
      feePercent: this.feePercent,
    };
  }

  static fromSerializable(obj: any) {
    const acc = new BusinessAccount(obj.holderName, obj.balance || 0);
    acc.restoreFromSerializable(obj);
    return acc;
  }
}

/**
 * LoanAccount:
 * - When a loan is "disbursed", balance becomes negative (amount owed) or we track a loan object.
 * - Provide EMI calculation and schedule.
 */
class LoanAccount extends BankAccount {
  // loan details
  private principal = 0;
  private annualRate = 0; // %
  private tenureMonths = 0;
  private emi = 0;
  private remainingEmis = 0;

  constructor(holder: string) {
    super(holder, 0, "Loan");
  }

  // disburse loan (creates loan)
  async disburseLoan(amount: number, annualRate: number, tenureMonths: number) {
    if (amount <= 0) throw new Error("Loan amount must be positive");
    this.principal = amount;
    this.annualRate = annualRate;
    this.tenureMonths = tenureMonths;
    this.emi = LoanAccount.calculateEmi(amount, annualRate, tenureMonths);
    this.remainingEmis = tenureMonths;
    this.balance += amount; // represent loan credited to balance (customer receives money)
    this.log(`Loan disbursed ₹${amount}, EMI ₹${this.emi.toFixed(2)}, tenure ${tenureMonths} months`);
  }

  static calculateEmi(P: number, annualRate: number, nMonths: number) {
    if (annualRate === 0) return P / nMonths;
    const r = annualRate / 12 / 100;
    const numerator = P * r * Math.pow(1 + r, nMonths);
    const denominator = Math.pow(1 + r, nMonths) - 1;
    return numerator / denominator;
  }

  async payEmi() {
    if (this.remainingEmis <= 0) throw new Error("Loan already closed or no EMIs remaining");
    if (this.emi <= 0) throw new Error("No EMI scheduled");
    if (this.emi > this.balance) {
      // If customer's available balance insufficient, we still record payment attempt failed.
      throw new Error("Insufficient funds to pay EMI from account balance (simulate separate payment source in real-world)");
    }
    // Here we simulate EMI payment reducing balance (customer used account funds to pay EMI)
    this.balance -= this.emi;
    this.remainingEmis -= 1;
    this.log(`EMI paid ₹${this.emi.toFixed(2)}, remaining EMIs: ${this.remainingEmis}`);
  }

  async deposit(amount: number) {
    // deposit into loan account reduces outstanding principal if wanted; here we treat deposit as repay
    if (amount <= 0) throw new Error("Deposit must be positive");
    // reduce principal outstanding proportionally — simplified approach
    this.balance -= amount; // paying back
    this.principal = Math.max(0, this.principal - amount);
    this.log(`Loan repayment ₹${amount}`);
  }

  async withdraw(_: number) {
    throw new Error("Withdraw not supported directly on Loan account");
  }

  toSerializable() {
    return {
      ...super.toSerializable(),
      principal: this.principal,
      annualRate: this.annualRate,
      tenureMonths: this.tenureMonths,
      emi: this.emi,
      remainingEmis: this.remainingEmis,
    };
  }

  static fromSerializable(obj: any) {
    const acc = new LoanAccount(obj.holderName);
    acc.restoreFromSerializable(obj);
    if (obj.principal) acc.principal = obj.principal;
    if (obj.annualRate) acc.annualRate = obj.annualRate;
    if (obj.tenureMonths) acc.tenureMonths = obj.tenureMonths;
    if (obj.emi) acc.emi = obj.emi;
    if (obj.remainingEmis) acc.remainingEmis = obj.remainingEmis;
    return acc;
  }
}


// Repository: Async JSON file storage


class FileRepository implements IRepository<BankAccount> {
  private filePath: string;
  private cache: Map<string, any> = new Map();

  constructor(fileName = "accounts_store.json") {
    this.filePath = path.resolve(fileName);
  }

  private async readAllRaw(): Promise<any[]> {
    try {
      const content = await fs.readFile(this.filePath, "utf8");
      return JSON.parse(content);
    } catch {
      return [];
    }
  }

  private async writeAllRaw(objs: any[]) {
    await fs.writeFile(this.filePath, JSON.stringify(objs, null, 2), "utf8");
  }

  async save(entity: BankAccount) {
    const all = await this.readAllRaw();
    const idx = all.findIndex((x) => x.id === entity.getId());
    const serial = entity.toSerializable();
    serial.id = entity.getId();
    serial.accountType = (entity as any).accountType || serial.accountType;
    if (idx >= 0) all[idx] = serial;
    else all.push(serial);
    await this.writeAllRaw(all);
  }

  private revive(obj: any): BankAccount {
    const t = obj.accountType;
    if (t === "Savings") return SavingsAccount.fromSerializable(obj);
    if (t === "Current") return CurrentAccount.fromSerializable(obj);
    if (t === "Business") return BusinessAccount.fromSerializable(obj);
    if (t === "Loan") return LoanAccount.fromSerializable(obj);
    // fallback
    const acc = new SavingsAccount(obj.holderName, obj.balance || 0);
    acc.restoreFromSerializable(obj);
    return acc;
  }

  async findById(id: string): Promise<BankAccount | null> {
    const all = await this.readAllRaw();
    const found = all.find((x) => x.id === id);
    if (!found) return null;
    const revived = this.revive(found);
    // ensure id preserved if stored
    (revived as any).id = found.id;
    return revived;
  }

  async findAll(): Promise<BankAccount[]> {
    const all = await this.readAllRaw();
    return all.map((o) => this.revive(o));
  }
}


// Service Layer (business logic) - coordinates repo, notifications, audit


class BankService {
  constructor(
    private repo: IRepository<BankAccount>,
    private notifiers: INotification[] = []
  ) {}

  async openAccount(account: BankAccount): Promise<void> {
    await this.repo.save(account);
    await AuditService.getInstance().record({
      time: new Date().toISOString(),
      accountId: account.getId(),
      message: `Account opened (${account.constructor.name}) for ${account["holderName"]}`,
    });
    for (const n of this.notifiers) {
      await n.send(account["holderName"], `Your ${account["accountType"]} account has been opened. ID: ${account.getId()}`);
    }
  }

  async deposit(accountId: string, amount: number) {
    const acc = await this.repo.findById(accountId);
    if (!acc) throw new Error("Account not found");
    await acc.deposit(amount);
    await this.repo.save(acc);
    await AuditService.getInstance().record({
      time: new Date().toISOString(),
      accountId,
      message: `Deposit ₹${amount}`,
    });
  }

  async withdraw(accountId: string, amount: number) {
    const acc = await this.repo.findById(accountId);
    if (!acc) throw new Error("Account not found");
    await acc.withdraw(amount);
    await this.repo.save(acc);
    await AuditService.getInstance().record({
      time: new Date().toISOString(),
      accountId,
      message: `Withdraw ₹${amount}`,
    });
  }

  async transfer(senderId: string, receiverId: string, amount: number) {
    const sender = await this.repo.findById(senderId);
    const receiver = await this.repo.findById(receiverId);
    if (!sender || !receiver) throw new Error("Sender or receiver not found");
    // perform transfer: withdraw from sender, deposit to receiver (atomicity not guaranteed but simulated)
    await sender.withdraw(amount);
    await receiver.deposit(amount);
    await this.repo.save(sender);
    await this.repo.save(receiver);
    await AuditService.getInstance().record({
      time: new Date().toISOString(),
      accountId: senderId,
      message: `Transferred ₹${amount} to ${receiverId}`,
    });
  }

  async disburseLoan(accountId: string, amount: number, annualRate: number, tenureMonths: number) {
    const acc = await this.repo.findById(accountId);
    if (!acc) throw new Error("Account not found");
    if (!(acc instanceof LoanAccount)) throw new Error("Account is not a LoanAccount");
    await (acc as LoanAccount).disburseLoan(amount, annualRate, tenureMonths);
    await this.repo.save(acc);
  }

  async payEmi(accountId: string) {
    const acc = await this.repo.findById(accountId);
    if (!acc) throw new Error("Account not found");
    if (!(acc instanceof LoanAccount)) throw new Error("Account is not a LoanAccount");
    await (acc as LoanAccount).payEmi();
    await this.repo.save(acc);
  }

  async listAll() {
    const all = await this.repo.findAll();
    all.forEach((a) => a.showDetails());
    return all;
  }

  async showTransactions(accountId: string) {
    const a = await this.repo.findById(accountId);
    if (!a) throw new Error("Account not found");
    a.showTransactions();
  }
}


// Factory helpers


class AccountFactory {
  static create(type: "Savings" | "Current" | "Business" | "Loan", holder: string, initBal = 0): BankAccount {
    if (type === "Savings") return new SavingsAccount(holder, initBal);
    if (type === "Current") return new CurrentAccount(holder, initBal);
    if (type === "Business") return new BusinessAccount(holder, initBal);
    if (type === "Loan") return new LoanAccount(holder);
    throw new Error("Unknown account type");
  }
}


// Example Usage / Main


async function main() {
  const repo = new FileRepository("enterprise_accounts.json");
  const notifiers: INotification[] = [new EmailNotifier(), new SMSNotifier()];
  const bankSvc = new BankService(repo, notifiers);

  // 1) Open accounts
  const s1 = AccountFactory.create("Savings", "Sapthagiri", 20000);
  const c1 = AccountFactory.create("Current", "Arjun", 5000);
  const b1 = AccountFactory.create("Business", "Ravi", 30000);
  const loanAcc = AccountFactory.create("Loan", "Kala");

  await bankSvc.openAccount(s1);
  await bankSvc.openAccount(c1);
  await bankSvc.openAccount(b1);
  await bankSvc.openAccount(loanAcc);

  // 2) Transactions
  await bankSvc.deposit(s1.getId(), 5000);
  await bankSvc.withdraw(c1.getId(), 1000);
  await bankSvc.transfer(s1.getId(), c1.getId(), 2000);

  // 3) Loan
  // Disburse a loan to loanAcc
  await bankSvc.disburseLoan(loanAcc.getId(), 500000, 9.5, 60); // ₹5,00,000 at 9.5% for 60 months
  // pay an EMI (simulated)
  await bankSvc.payEmi(loanAcc.getId()).catch((e) => console.log("EMI payment error (expected):", e.message));

  // 4) Apply savings interest (call method directly after fetching account)
  const fetchedSavings = await repo.findById(s1.getId());
  if (fetchedSavings instanceof SavingsAccount) {
    await fetchedSavings.applyInterest();
    await repo.save(fetchedSavings);
  }

  // 5) Show state
  console.log("\n=== All accounts ===");
  await bankSvc.listAll();
  console.log("\n=== Transactions ===");
  await bankSvc.showTransactions(s1.getId());

  console.log("\n Done. Accounts persisted to enterprise_accounts.json (in working directory). Audit in audit_log.json.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
});
