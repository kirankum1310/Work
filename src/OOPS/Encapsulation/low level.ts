// loginTest.ts
class LoginTest {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // Encapsulated access using getters/setters
  public setUsername(name: string) {
    this.username = name;
  }

  public getUsername(): string {
    return this.username;
  }

  public performLogin(): void {
    console.log(`Logging in with ${this.username} and ******`);
  }
}

// execution
const test = new LoginTest("admin", "Admin@123");
test.performLogin(); 
test.setUsername("test_user");
console.log("Updated username:", test.getUsername());
