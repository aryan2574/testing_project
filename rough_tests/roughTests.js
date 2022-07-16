// This is testing related to loading a webpage.
// Just moving back and forth of the webpage.

// This is importring puppeteer
const puppeteer = require('puppeteer');

//Describing test function
describe('My first Puppeteer Test', () =>{

  it('should launch the browser', async function() {
    const browser = await puppeteer.launch({headless: false, slowMo: 500, devtools: false})
    const page = await browser.newPage()
    await page.goto('https://example.com/')

    await page.waitForSelector('h1')   //Will check for selector in the page
    await page.reload()                       //Use to reload the page
    await page.waitForTimeout(3000)  //We can wait on a tage for the given time

    await page.goto('https://dev.to/')
    await page.waitForSelector('#page-content')
    await page.goBack()
    await page.waitForSelector('h1')
    await page.goForward()
    await page.waitForSelector('#page-content')

    await browser.close()                       //It will close the browser
  })
})