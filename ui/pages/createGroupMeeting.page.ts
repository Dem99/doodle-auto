import Page from "./page";

class CreateGroupMeetingPage extends Page {
  url = "/create";

  get ["title"]() {
    return `#d-pollTitle`;
  }

  get ["note"]() {
    return `#d-pollDescription`;
  }

  get ["Continue"]() {
    return `button.d-button.d-nextButton.d-send.d-large.d-primaryButton`;
  }

  open() {
    super.open(this.url);
  }
}

export default new CreateGroupMeetingPage();