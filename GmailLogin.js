const puppeteer = require('puppeteer');
const PropertiesReader = require('properties-reader');
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server started");
//   });
(async () => {
    // const prop = PropertiesReader('C:/Users/sriranjanis/Documents/Gmail_Login/Config.properties');
    // getProperty = (pty) => {return prop.get(pty);}
    const browser = await puppeteer.launch({ headless: false,defaultViewport: null,
        args: ['--start-maximized'] })
        // executablePath:"C:/Users/sriranjanis/AppData/Local/Google/Chrome/Application/chrome.exe"}
    const page = await browser.newPage()

    // const navigationPromise = page.waitForNavigation()


    try {
        
          await page.goto('https://accounts.google.com/')

          console.log("browser launched!!!!!!!!!!!!!!!!!!!!!!")

          await page.setDefaultTimeout(50000);  
          await page.setDefaultNavigationTimeout(50000);
        
          // await navigationPromise
        
          await page.screenshot({ path: `Gmail_Screenshots/LoginPage.png` })
        
          await page.waitForSelector('input[type="email"]')
          await page.click('input[type="email"]')
          
          // await page.setContent('<h1 style="border:Red; border-width:5px; border-style:solid;"> Gmail Login!!! </h1>')
          // await page.emulateMedia('screen')

        
          // await navigationPromise
        
           //username
          await page.type('input[type="email"]', 'puppeteerlogin23@gmail.com')
          await page.screenshot({ path: `Gmail_Screenshots/username.png` })
          console.log("username entered!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        
          await page.waitForSelector('#identifierNext')
          await page.click('#identifierNext')
        
          await page.waitForTimeout(1000);
        
          await page.waitForSelector('input[type="password"]')
          await page.click('input[type="email"]')
          await page.waitForTimeout(1000);
        
          //password
          await page.type('input[type="password"]', 'gmail@123')
          await page.screenshot({ path: `Gmail_Screenshots/password.png` })
          console.log("password entered!!!!!!!!!!!!!!!!!!!!!!!!!!!")

        //   await page.pdf({
        //     printBackground: true,
        //     path: "webpage.pdf",
        //     format: "Letter",
        //     margin: {
        //         top: "20px",
        //         bottom: "40px",
        //         left: "20px",
        //         right: "20px"
        //     }
        // });
        
          await page.waitForSelector('#passwordNext')
          await page.click('#passwordNext')
          await page.waitForTimeout(1000);
          // await navigationPromise
          
          await page.waitForTimeout(3000);
          await page.screenshot({ path: `Gmail_Screenshots/HomePage.png` })

          // await page.setViewport({width:1440,height:900,deviceScaleFactor:2})

          

    }
 catch (err) {
    console.log(`❌ Error: ${err.message}`);
  }
  finally {
    await browser.close();
    console.log("browser closed")
  }
 
})()


