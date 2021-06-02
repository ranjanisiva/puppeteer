const puppeteer = require('puppeteer');
const { assert } = require('chai');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized'],executablePath:"C:/Users/sriranjanis/AppData/Local/Google/Chrome/Application/chrome.exe"});
    const page = await browser.newPage();
    await page.setDefaultTimeout(15000);  
    await page.setDefaultNavigationTimeout(50000);
    await page.goto('https://the-internet.herokuapp.com/upload'); 
    const fileInput = await page.$('input[type=file]');
    await fileInput.uploadFile('./Mobile.png');
    await page.evaluate(() => {
        document.querySelector('input[type=submit]').click();
    });
    await page.waitForTimeout(10000);
    await page.waitForSelector('#content > div > h3');
    const FileUpload = await page.$('#content > div > h3');
    const FileUpload1 = await page.evaluate(FileUpload => FileUpload.innerText, FileUpload);
    console.log("name is ---"+FileUpload1);
    assert.equal('File Uploaded!',FileUpload1); 
    //await browser.close();
  })();