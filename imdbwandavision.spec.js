// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('imdb-wandavision', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('imdb-wandavision', async function() {
    // Test name: imdb-wandavision
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://www.imdb.com/")
    // 2 | setWindowSize | 1421x691 | 
    await driver.manage().window().setRect(1421, 691)
    // 3 | click | name=q | 
    await driver.findElement(By.name("q")).click()
    // 4 | type | name=q | wandavision
    await driver.findElement(By.name("q")).sendKeys("wandavision")
    // 5 | sendKeys | name=q | ${KEY_ENTER}
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
    // 6 | click | linkText=WandaVision | 
    await driver.findElement(By.linkText("WandaVision")).click()
    // 7 | runScript | window.scrollTo(0,285) | 
    await driver.executeScript("window.scrollTo(0,285)")
    // 8 | click | linkText=TRIVIA | 
    await driver.findElement(By.linkText("TRIVIA")).click()
  })
})
