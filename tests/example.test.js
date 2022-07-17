//Getting content from the webpage
// Usage of assertions

const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('Puppeteer Test ', () => {
  it('should launch the browser',async function () {
    //Loading
    const browser = await puppeteer.launch({
      headless:false,
      slowMo:0,
      devtools:false
    })
    const page = await browser.newPage()
    await page.goto('https://example.com/')
    await page.waitForSelector('h1')
    await page.waitForXPath('//h1')   //We can search for selector in the form of Xpath

    //Getting the content
    const title = await page.title()
    const url = await page.url()
    const text = await page.$eval('p',e => e.textContent)    //$eval for single elements
    const countOfP = await page.$$eval('p', e => e.length)   //$$eval for multiple elements

    //Printing the content
    console.log('Title of the page ' + title);
    console.log('URL of the page ' + url)
    console.log('Text Content in P tag : ' + text)
    console.log('Number of P tags on website : ' + countOfP)

    //Assertions using Chai
    expect(title).to.be.a('string','Example Domain')
    expect(url).to.include('example.com')
    expect(text).to.be.a('string','This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.')
    expect(countOfP).to.equal(2)

    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForSelector('#searchTerm')
    await page.type('#searchTerm','Ayush Aryan',{delay:100})
    await page.keyboard.press('Enter',{delay:10})   //Used to press button from keyboard

    await page.waitForTimeout(1000)
    await browser.close()
  })
})