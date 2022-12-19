import puppeteer from "puppeteer-core";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: true,
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .description");
    //page.$() for selecting an element on the page
    //pay attention to .event .description element, as this is what contains
    // the detailed information of an event. If this element is present,
    // it means that the event is expanded.
    expect(eventDetails).toBeNull();
  });
  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });
});
