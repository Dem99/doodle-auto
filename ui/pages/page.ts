import { TIMEOUTS } from "../support/constants";
const { DEFAULT } = TIMEOUTS;

export default abstract class Page {
  public open(path: string): void {
    browser.url(path);
  }

  public waitForElementAndScroll(selector: string): void {
    $(selector).waitForExist({ timeout: DEFAULT });
    $(selector).scrollIntoView({ block: "center" });
  }

  public waitForElementAndClick(selector: string): void {
    this.waitForElementAndScroll(selector);
    $(selector).waitForEnabled({ timeout: DEFAULT });
    $(selector).click();
  }

  public waitForElementAndSetValueForTwoElements(firstSelector: string,secondSelector: string,firstValue: string, secondValue: string): void {
    this.waitForElementAndScroll(firstSelector);
    $(firstSelector).waitForEnabled({ timeout: DEFAULT });
    $(firstSelector).setValue(firstValue);
    $(secondSelector).setValue(secondValue);
  }

  public waitForElementAndSetValueForElement(selector: string,value: string): void {
    this.waitForElementAndScroll(selector);
    $(selector).waitForEnabled({ timeout: DEFAULT });
    $(selector).setValue(value);
  }

  public waitForUrlToContain(text: string): void {
    browser.waitUntil(
      function () {
        return browser.getUrl().indexOf(text) !== -1;
      },
      { timeout: DEFAULT }
    );
  }

  public waitForDisplayed(selector: string): void {
    $(selector).waitForDisplayed({ timeout: DEFAULT });
  }
}
