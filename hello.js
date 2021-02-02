#!/usr/bin/env node

const {Builder, By, Key, until} = require('selenium-webdriver');
(async function hello() {
    let driver = new Builder()
                        .forBrowser('firefox')
                        .build();

    await driver.get('https://www.google.com/');

    let frame = await driver.wait(until.elementLocated(By.xpath('//iframe')));
    await driver.switchTo().frame(frame);

    let button = await driver.wait(until.elementLocated(By.id('introAgreeButton')),5000);
    await button.click();

    await driver.switchTo().defaultContent();
    await driver.findElement(By.name('q')).sendKeys('devops', Key.RETURN);
})();

