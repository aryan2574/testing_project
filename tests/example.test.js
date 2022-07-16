const puppeteer = require('puppeteer');

describe('My Puppeteer Test', () => {
  it('should launch the browser', async function () {
    const browser = await puppeteer.launch({   //Launch the browser
      headless: false,
      slowMo: 100,
      devtools: false
    })
    const page = await browser.newPage()   //Open Page from browser
    await page.goto('https://devexpress.github.io/testcafe/example/')  //Will go to this website
    await page.waitForSelector('h1')    //Search for the selector. If not found, will throw error

    await browser.close()                                                        // Will close the browser
  })
})