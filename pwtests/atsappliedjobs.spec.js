const {test}=require("@playwright/test")
test.only("ATSscenario",async({browser})=>

{
const newbrowser=await browser.newContext()
const newpage= await newbrowser.newPage()


await newpage.goto("https://atsuat.bbsi.com/login")
await newpage.waitForTimeout(3000)
await newpage.locator('input#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.waitForTimeout(3000)
await newpage.locator("[tabindex='0']").click()
await newpage.locator("#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.locator("#idSIButton9").click()
await newpage.locator("#i0118").fill("Ss831Cc#2501~")
await newpage.locator("#idSIButton9").click();
await newpage.waitForTimeout(3000)
await newpage.locator("input#idSIButton9").click()
await newpage.waitForLoadState("networkidle")
const jobs= newpage.locator(".card.dashboard-sm-card")
const total= await jobs.count()

for ( let i=0;i<total;i++)
{
  const appliedjob =await jobs.nth(i).locator(".dashboard-sm-card-text").textContent()
  if(appliedjob.includes("Applied"))
  {
    await jobs.nth(i).locator("a").click()
    break;
    await newpage.waitForTimeout(3000)
  }
}
}
)