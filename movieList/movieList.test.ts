import { Builder, Capabilities, By} from "selenium-webdriver"
import { beforeAll, afterAll, test, expect } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



beforeAll(async () => {
    await (driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Test movie input', async () => {
    let input = await driver.findElement(By.xpath('/html/body/main/section/form/input'))
    let button = await driver.findElement(By.xpath('/html/body/main/section/form/button'))
    // let deleteBtn = await driver.findElement(By.xpath('/html/body/main/ul/li/button'))

    await input.sendKeys('Jack Frost')
    await button.click()

    await driver.sleep(2000)



    expect(await driver.findElement(By.xpath('/html/body/main/ul/li/span')).getText()).toContain('Jack Frost')


    await driver.sleep(2000)

    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()


    await driver.sleep(2000)


    await driver.findElement(By.xpath('/html/body/main/ul/li/button')).click()


    await driver.sleep(2000)

})





