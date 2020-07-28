import Page from "./page";

class SettingsPage extends Page {
  url = "/settings/account";

  get ["Name"]() {
    return `input.Input-field`;
  }

  get ["Save"]() {
    return `button.Button--green`;
  }

  get["Changes were saved"]() {
      return `div.Nag-content`;
  }

  get["English"]() {
    return `div.rrs__label`;
  }

  get["Deustch"]() {
    return `li[data-testid=rrs-option_language_1]`;
  }
  
  get["Die Änderungen wurden gespeichert"]() {
    return `div.Nag-content`;
  }

  open() {
    super.open(this.url);
  }
}

export default new SettingsPage();