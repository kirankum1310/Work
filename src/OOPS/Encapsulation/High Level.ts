// basePage.ts
class BasePage {
  private _url: string;
  protected sessionToken: string = "";

  constructor(url: string) {
    this._url = url;
  }

  public get url(): string {
    return this._url;
  }

  public openPage(): void {
    console.log(` Navigating to ${this._url}`);
  }

  protected setSession(token: string): void {
    this.sessionToken = token;
    console.log(" Session initialized");
  }
}

// loginPage.ts
class LoginPage extends BasePage {
  private _username: string = "";
  private _password: string = "";

  constructor(url: string) {
    super(url);
  }

  public setCredentials(username: string, password: string): void {
    this._username = username;
    this._password = password;
  }

  public performLogin(): void {
    this.openPage();
    if (this._username === "admin" && this._password === "Admin@123") {
      this.setSession("token_ABC123");
      console.log(" Login successful");
    } else {
      console.log(" Login failed - Invalid credentials");
    }
  }

  public getToken(): string {
    return this.sessionToken;
  }
}

// dashboardPage.ts
class DashboardPage extends LoginPage {
  constructor(url: string) {
    super(url);
  }

  public viewDashboard(): void {
    if (this.getToken() !== "") {
      console.log(" Dashboard data loaded successfully");
    } else {
      console.log(" Access denied - No session token found");
    }
  }
}

// runTest.ts
const test = new DashboardPage("https://automation-app/login");
test.setCredentials("admin", "Admin@123");
test.performLogin();
test.viewDashboard();
