// Here we are modifying changes in the webpage.
// Selection of different options and writing on webpage.

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
    await page.type('#developer-name','Ayush Aryan',{delay: 100})   //It is used to type on the screen
    await page.click('#remote-testing',{clickCount: 1})                  // Used to click, select options
    await page.click('#background-parallel-testing',{clickCount:1})
    await page.click('#tried-test-cafe', {clickCount: 1})
    await page.click('#macos',{clickCount: 1})
    await page.select('#preferred-interface','JavaScript API')        //Selection from choices like drop-down
    const comments = "Hello, How are you? I'm filling this form."
    await page.type('#comments',comments)
    await page.click('#submit-button',{clickCount:1})
    await page.waitForTimeout(500)                                     // Will wait for few milliseconds
    await page.waitForSelector('.result-content')
    await browser.close()                                                        // Will close the browser
  })
})