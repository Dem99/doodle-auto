import Page from "./page";

class LoginPage extends Page {
  url = "/login?redirectUrl=%2Fdashboard";

  get ["Email"]() {
    return `input[placeholder='Email']`;
  }

  get ["Password"]() {
    return `input[placeholder='Password']`;
  }

  get ["Log in"]() {
    return `button.Button--green`;
  }

  get ["Invalid password"]() {
    return `div.InputFeedback--error span`
  }

  open() {
    super.open(this.url);
  }
}

export default new LoginPage();
