const { test, expect, request } = require('@playwright/test')
let webcontext

test.beforeAll(async ({ browser }) => {
    test.setTimeout(120000);

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://atsuat.bbsi.com/login")
    await page.waitForTimeout(6000)
    await page.locator('#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
    await page.locator("[tabindex='0']").click()
    await page.waitForTimeout(4000)
    await page.locator("input#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
    await page.waitForTimeout(3000)
    await page.locator("#idSIButton9").click()
    await page.waitForTimeout(4000)
    await page.locator("[type='password']").fill("Ss831Cc#2501~")
    await page.locator("input#idSIButton9").click();
    await page.waitForTimeout(3000)
    await page.locator("input#KmsiCheckboxField").click()
    await expect(page.locator("input#KmsiCheckboxField")).toBeChecked()
    await page.locator("input#KmsiCheckboxField").uncheck()
    await expect(page.locator("input#KmsiCheckboxField")).not.toBeChecked()
    await page.locator("input#idSIButton9").click()
    await context.storageState({ path: 'ats.json' })
    webcontext = await browser.newContext({ storageState: 'ats.json' })


}

)
test('locators', async () => {
    const page = await webcontext.newPage()
    await page.goto("https://atsuat.bbsi.com/login")
    await expect(page.locator(".hamburger-menu")).toBeVisible({
        timeout: 120000
    });
    await page.locator(".hamburger-menu").click()
    await page.locator("//a [text()=' Applicant List ']").click()
    await page.locator(".btn-link.mx-0.px-0.align-top.float-start .icon-box").click()
    await page.getByPlaceholder("MM/DD/YYYY").nth(0).click()
    await page.getByRole('button', { name: "2026" }).click()
    await page.getByText(year).click()
    await page.locator(" tr .ng-star-inserted").nth(Number(month) - 1).click()
    await page.locator("//span[text()='" + date + "']").click()


}
)