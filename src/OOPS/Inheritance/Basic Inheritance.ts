// Low-Level Inheritance

// Rule Book
class BaseTest {
  startTest(): void {
    console.log("🔹 Browser launched");
  }

  endTest(): void {
    console.log("🔹 Browser closed");
  }
}

class LoginTest extends BaseTest {
  testValidLogin(): void {
    this.startTest(); // inherited
    console.log("Entering username & password...");
    console.log("Clicked Login Button...");
    console.log("Login Successful!");
    this.endTest(); // inherited
  }

  testInvalidLogin(): void {
    this.startTest();
    console.log("Entered invalid credentials...");
    console.log("Login failed...");
    this.endTest();
  }
}

const login = new LoginTest();
login.testValidLogin();
login.testInvalidLogin();