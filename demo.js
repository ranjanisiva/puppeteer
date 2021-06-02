
const puppeteer = require('puppeteer');

import reporter from './reporter';
(async () => {
    reporter
      .feature('Feature')
      .story('Story');
      const browser = await puppeteer.launch({ headless: false,defaultViewport: null,
        args: ['--start-maximized'] , executablePath:"C:/Users/sriranjanis/AppData/Local/Google/Chrome/Application/chrome.exe"})
    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    await page.waitFor(500) 
    const screenshot = await page.screenshot({ path: `LoginPage.png` });
    reporter.addAttachment('Screenshot', screenshot, 'LoginPage.png');
})();