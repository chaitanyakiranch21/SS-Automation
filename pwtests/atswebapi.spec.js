const { test } = require("@playwright/test");

test.use({
    storageState: "auth.json"
});

test("ATSscenario", async ({ page }) => {

    await page.goto("https://atsuat.bbsi.com");
    await page.waitForLoadState("networkidle");

    const jobs = page.locator(".card.dashboard-sm-card");
    const total = await jobs.count();

    for (let i = 0; i < total; i++) {

        const appliedJob = await jobs
            .nth(i)
            .locator(".dashboard-sm-card-text")
            .textContent();

        if (appliedJob.includes("Applied")) {

            await jobs.nth(i).locator("a").click();
            break;
        }
    }

});