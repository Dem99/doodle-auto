import Page from "./page";

class CalendarPage extends Page {
  url = "/create/options";

  get ["Add time suggestions"]() {
    return `button.d-button.d-smartSuggestionsButton.d-send.d-large.d-primaryButton`;
  }

  get ["9:45"]() {
    return `tr[data-time="09:30:00"]`;
  }

  get ["Continue"]() {
    return `#d-wizardOptionsNavigationView > div > div > div.d-actionButtons > button.d-button.d-nextButton.d-send.d-large.d-primaryButton`;
  }

  open() {
    super.open(this.url);
  }
}

export default new CalendarPage();