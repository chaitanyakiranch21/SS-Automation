const {test}=require('@playwright/test')
test('locators',async({browser})=>
{

const newbrowser= await browser.newContext()
const newpage=await newbrowser.newPage()
await newpage.goto("https://rahulshettyacademy.com/client/#/auth/login")
await newpage.locator("#userEmail").fill("shrestisingh456@gmail.com")
await newpage.locator("#userPassword").fill("Letmein1!")
await newpage.locator ("#login").click()
// await newpage.waitForTimeout(5000)
//or 
await newpage.waitForLoadState ("networkidle")
console.log ( await newpage.locator(".card-body b").nth(2).textContent())  // - it will give  text context for 2nd product 
console.log ( await newpage.locator(".card-body b").allTextContents())  // it will give the list text content present in a page 
})






