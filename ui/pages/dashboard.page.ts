import Page from "./page";

class DashboardPage extends Page {
  url = "/dashboard";

  get ["Response body"]() {
    return `body > pre`;
  }

  open() {
    super.open(this.url);
  }
}

export default new DashboardPage();
