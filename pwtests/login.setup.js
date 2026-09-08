// login.setup.js

const { test } = require('@playwright/test');

test('Login', async ({ page }) => {

    await page.goto("https://atsuat.bbsi.com/login");
    await page.locator('input#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com");
    await page.locator("[tabindex='0']").click();
    await page.locator("#i0116").fill("chaitanya.chintalapudi@bbsihq.com");
    await page.locator("#idSIButton9").click();
    await page.locator("#i0118").fill("Ss831Cc#2501~");
    await page.locator("#idSIButton9").click();
    await page.locator("input#idSIButton9").click();
    await page.waitForLoadState("networkidle");
    await page.context().storageState({
        path: "auth.json"
    });

});