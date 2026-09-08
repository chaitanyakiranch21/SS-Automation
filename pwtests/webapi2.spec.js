const {test, expect} = require('@playwright/test');

let webContext;
test.beforeAll(async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("shrestisingh456@gmail.com");
    await page.locator("#userPassword").type("Letmein1!");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'sessionState.json'});
    webContext = await browser.newContext({storageState:'sessionState.json'});
})

test('Client login', async()=>
{
    const email = "";
    const productName = 'Zara Coat 4';
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const products = await page.locator(".card-body");
    const tiles = await page.locator(".card-body b").allTextContents();
    console.log(tiles);
})














// test('Client login', async()=>
// {
//     const email = "";
//     const productName = 'Zara Coat 4';
//     const page = await webContext.newPage();
//     await page.goto("https://rahulshettyacademy.com/client");
//     const products = await page.locator(".card-body");
//     const tiles = await page.locator(".card-body b").allTextContents();
//     console.log(tiles);
//     const count = await products.count();

//     for(i=0; i<count; ++i)
//     {
//         if(await products.nth(i).locator("b").textContet() === productName)
//         {
//             await products.nth(i).locator("text = Add To Cart").click();
//             break;
//         }
//     }

//     await page.locator("[routerLink*='cart']").click()
//     await page.locator("div li").first().waitFor();
//     const bool = await page.locator("h3:has-text('Zara Coat 4')").isVisible();
//     expect(bool).toBeTruthy();
//     await page.locator("text=Checkout").click();
//     await page.locator("[placeholder*='Country']").type("ind",{delay:100});
//     const dropdown = await page.locator(".ta-results");
//     await dropdown.waitFor();

//     optionsCount = await dropdown.locator("button").count();
//     for(let i=0; i<optionsCount; ++i)
//     {
//         text = await dropdown.locator("button").nth(i).textContet();
//         if(text === "India")
//         {
//             await dropdown.locator("button").nth(i).click();
//             break;
//         }
//     }

//     await expect(page.locator(".user__name [type='text']")).toHaveText(email);
//     await page.locator(".action__submit").click();
//     await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order");
//     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContet();
//     console.log(orderId);
//})