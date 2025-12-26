// baseTest.ts
class BaseTest {
  private _browser: string = "Chrome";

  public get browser(): string {
    return this._browser;
  }

  public set browser(value: string) {
    if (["Chrome", "Edge", "Firefox"].includes(value)) {
      this._browser = value;
    } else {
      throw new Error("Invalid browser type");
    }
  }

  public launch() {
    console.log(`Launching ${this._browser} browser`);
  }
}

// execution
const test = new BaseTest();
test.launch();
test.browser = "Firefox"; // valid
test.launch();

// test.browser = "Safari"; // throws error
