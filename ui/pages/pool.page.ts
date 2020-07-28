import Page from "./page";

class PoolPage extends Page {
  url = "";

  get ["first meeting"]() {
    return `h1.d-pollTitle`;
  }

  get ["meeting"]() {
    return `div.d-content`;
  }

  open() {
    super.open(this.url);
  }
}

export default new PoolPage();