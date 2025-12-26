// Mid-Level Inheritance

class BaseTest {
  openBrowser(browser: string): void {
    console.log(`Opening ${browser} browser...`);
  }

  closeBrowser(): void {
    console.log("Closing browser...");
  }
}

class SmokeTest extends BaseTest {
  login(): void {
    console.log(" Logging into the application...");
  }

  logout(): void {
    console.log("Logging out of the application...");
  }
}

class CheckoutTest extends SmokeTest {
  addToCart(): void {
    console.log("🛒 Adding product to cart...");
  }

  makePayment(): void {
    console.log("Making payment...");
  }

  runFullTest(): void {
    this.openBrowser("Chrome"); // from BaseTest
    this.login();               // from SmokeTest
    this.addToCart();           // local
    this.makePayment();         // local
    this.logout();              // from SmokeTest
    this.closeBrowser();        // from BaseTest
  }
}

// Run
const test = new CheckoutTest();
test.runFullTest();
