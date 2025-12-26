// High-Level Inheritance

// Rule Book
class BaseTest {
  browser: string;

  constructor(browser: string) {
    this.browser = browser;
  }

  setup(): void {
    console.log(` Launching ${this.browser} browser`);
  }

  teardown(): void {
    console.log(` Closing ${this.browser} browser`);
  }

  run(): void {
    console.log(" Base test execution started...");
  }
}

// Child Class 1
class LoginTest extends BaseTest {
  constructor(browser: string) {
    super(browser);
  }

  override run(): void {
    super.setup();
    console.log("Running Login Test...");
    console.log("Entering valid credentials");
    console.log("Login successful!");
    super.teardown();
  }
}

// Child Class 2
class ProductTest extends BaseTest {
  constructor(browser: string) {
    super(browser);
  }

  override run(): void {
    super.setup();
    console.log("Running Product Test...");
    console.log("Adding item to cart");
    console.log("Proceeding to checkout");
    console.log("Product purchased successfully!");
    super.teardown();
  }
}

// Child Class 3
class ReportTest extends BaseTest {
  constructor(browser: string) {
    super(browser);
  }

  override run(): void {
    super.setup();
    console.log("Running Report Generation Test...");
    console.log("Fetching test data...");
    console.log("Report generated and saved!");
    super.teardown();
  }
}

// Simulate a test suite
const testSuite: BaseTest[] = [
  new LoginTest("Chrome"),
  new ProductTest("Edge"),
  new ReportTest("Firefox"),
];

console.log("\n===  HIGH LEVEL INHERITANCE TEST SUITE ===");
for (const test of testSuite) {
  test.run();
  console.log("------------------------------------");
}