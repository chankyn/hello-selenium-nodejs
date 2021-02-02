#!/usr/bin/env node

const {Builder, By, promise, Key, until} = require('selenium-webdriver');
(async function hello() {
    let driver = new Builder()
                        .forBrowser('firefox')
                        .build();

    await driver.get('https://stackoverflow.com/');

    
    await driver.findElement(By.name('q')).sendKeys('[selenium]', Key.RETURN);
    let qs = await driver.wait(until.elementsLocated(By.className('question-hyperlink')));


    for (let link of qs) {
        let name = await link.getText();
        let url = await link.getAttribute("href");
        
        await console.log(name+": "+url);
    }
    
    
    
})();

