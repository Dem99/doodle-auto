import Page from "./page";

class PoolSettingsPage extends Page {
  url = "/create/settings";

  get ["Finish"]() {
    return `#d-wizardSettingsNavigationView > div > div > div.d-actionButtons > button.d-button.d-nextButton.d-send.d-large.d-primaryButton`;
  }

  open() {
    super.open(this.url);
  }
}

export default new PoolSettingsPage();