import { Given, When, Then } from "cucumber";
import LoginPage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import SettingsPage from "../pages/settings.page";
import CalendarPage from "../pages/calendar.page";
import CreateGroupMeetingPage from "../pages/createGroupMeeting.page";
import PoolPage from "../pages/pool.page";
import PoolSettingsPage from "../pages/poolSettings.page";

const pages = {
  Login: LoginPage,
  Dashboard: DashboardPage,
  Settings: SettingsPage,
  Calendar: CalendarPage,
  "Create group meeting": CreateGroupMeetingPage,
  Pool: PoolPage,
  "Pool settings": PoolSettingsPage,
};

Given(/^I open "(.+)" page$/, (page) => {
  pages[page].open();
});

Given(/^I login as User 1$/, () => {
  LoginPage.open();
  LoginPage.waitForElementAndSetValueForElement(LoginPage.Email,"cityfoggy@mail.ru");
  LoginPage.waitForElementAndSetValueForElement(LoginPage.Password,"kokkekkak228322");
  LoginPage.waitForElementAndClick(LoginPage["Log in"]);
  browser.pause(1000);
});

When(/^I click on "(.+)" (?:button|link) on "(.+)" page$/, (elem, page) => {
  pages[page].waitForElementAndClick(pages[page][elem]);
});

When(/^I fill out "(.+)" and "(.+)" fields with following data on "(.+)" page$/, (firstElem, secondElem, page, table) => {
  const data = table.hashes();
  pages[page].waitForElementAndSetValueForTwoElements(pages[page][firstElem], pages[page][secondElem], data[0][firstElem], data[0][secondElem]);
});

When(/^I write "(.+)" to "(.+)" (?:field|label) on "(.+)" page$/, (value, elem, page) => {
  pages[page].waitForElementAndSetValueForElement(pages[page][elem], value);
});

Then(/^I should be on "(.+)" page$/, (page) => {
  pages[page].waitForUrlToContain(pages[page].url);
});

Then(
  /^I should see "(.+)" (?:field|link|text|button|label|title|note) on "(.+)" page$/,
  (elem, page) => {
    pages[page].waitForDisplayed(pages[page][elem]);
  }
);
