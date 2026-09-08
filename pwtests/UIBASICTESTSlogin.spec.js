   
//    //login page 
   
   
// //    const {test}=require('@playwright/test');

// //    test( 'testcase 1',async ({browser})=>
// //    {

// //     const context =await browser.newContext();
// //       const newPage =await context.newPage();
// //       newPage.goto ("https://benefits-uat.bbsi.com/login")

// // });

// // const {login}=require('@playwright/test')
// // login('loginpage',async ({browser})=>

// // {
// //     const newbrowser=await browser.newContext();
// //     const newpage=await newbrowser.newPage();
// //     await newpage.goto ("https://benefits-uat.bbsi.com/login")
// // });

// // const {test, expect}=require('@playwright/test');

// //  test('scenario1', async ({browser})=>

// //     {

// // const newbrowser=await browser.newContext();
// // const newpage=await newbrowser.newPage();
// // await newpage.goto("https://atsuat.bbsi.com/login")
// // await newpage.waitForTimeout(5000);
// // console.log (await newpage.title ())

// // })
// // test.only('scenario2',async ({page})=>

// //     {
// //      await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
// //      console.log(await page.title())
// //      await expect(page).toHaveTitle("Let's Shop");
// // })

// // open a broswer and navigate to url 

// // const {test,expect} =require('@playwright/test')

// //  const login= test('scenario 1', async ({page})=>
// //  {
   
// //  await page.goto ("https://chatgpt.com/")
// // console.log (await page.title() )
// // await expect(page).toHaveTitle("ChatGPT")


// // })

// // open new browser => new page => hit url=>get the title =>confirm the title 

// // const {test,expect}=require('@playwright/test')

// // test('regression',async ({browser})=>
// // {

// //     const newbrowser= await browser.newContext()
// //    const newpage= await newbrowser.newPage()
   
// // } )

// // test('scenario',async({page})=>
// // {  
// // await page.goto("https://atsuat.bbsi.com/login")
// //    await page.waitForTimeout(5000)
// //    console.log(await page.title())
// //    await expect(page).toHaveTitle("ATS")
   
   

// // })

//  // finding locators of an element 

// const {test, expect}=require('@playwright/test')
// test('locators',async({browser})=>
// {

// const newbrowser= await browser.newContext()
// const newpage=await newbrowser.newPage()
// await newpage.goto("https://atsuat.bbsi.com/login")
// await newpage.waitForTimeout(6000)
// await console.log(await newpage.title())
// await newpage.locator('#input-vaadin-email-field-6').fill("shresti.singh@bbsihq.com")
// await newpage.locator("[tabindex='0']").click()
// await newpage.waitForTimeout(4000)
// await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.co")
// await newpage.waitForTimeout(3000)
// await newpage.locator("#idSIButton9").click()
// console.log(await newpage.locator("#usernameError").textContent()) //- if we want to extract validation msg in console  if we are giving usrname/password incorrect
// await expect (newpage.locator("#usernameError")).toContainText("account") //-if we want to make sure the validation message is correct or not then will use assertion
// await newpage.waitForTimeout(3000)
// await newpage.locator("input#i0116").fill(" ")  // it will remove the existing values 
// await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.com")
// await newpage.locator("input#idSIButton9").click()
// await newpage.waitForTimeout(4000)
// await newpage.locator("[type='password']").fill("Neelamdeepak@456  ")
// await newpage.locator("input#idSIButton9").click();
// await newpage.waitForTimeout(3000)
// await newpage.locator("input#idBtn_Back").click();
// // await newpage.waitForTimeout(15000) or below syntax 
// await newpage.waitForLoadState ("networkidle")
// console.log  (await newpage.locator("div.dashboard-sm-card-text span ").nth (0).textContent())  // - it will give  text context for page index [0]
// console.log  (await newpage.locator("div.dashboard-sm-card-text span ").allTextContents())
// await newpage.waitForLoadState("networkidle")
//  newpage.locator('.card.dashboard-sm-card.dashboard-sm-card-active a').click();
// // const activeJobsArrow = newpage.locator('.card.dashboard-sm-card div', {hasText:'Applied'});
// await newpage.waitForTimeout(10000)
// })

 

// // const {test, expect}=require('@playwright/test')
// // test('locators',async({browser})=>
// // {

// // const newbrowser= await browser.newContext()
// // const newpage=await newbrowser.newPage()
// // await newpage.goto("https://atsuat.bbsi.com/login")
// // await newpage.waitForTimeout(6000)
// // await console.log(await newpage.title())
// // await newpage.locator('#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
// // await newpage.locator("[tabindex='0']").click()
// // await newpage.waitForTimeout(4000)
// // await newpage.locator("input#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
// // await newpage.waitForTimeout(3000)
// // await newpage.locator("#idSIButton9").click()
// // console.log(await newpage.locator("#usernameError").textContent()) //- if we want to extract validation msg in console  if we are giving usrname/password incorrect
// // await expect (newpage.locator("#usernameError")).toContainText("account") //-if we want to make sure the validation message is correct or not then will use assertion
// // await newpage.waitForTimeout(3000)
// // await newpage.locator("input#i0116").fill(" ")  // it will remove the existing values 
// // await newpage.locator("input#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
// // await newpage.locator("input#idSIButton9").click()
// // await newpage.waitForTimeout(4000)
// // await newpage.locator("[type='password']").fill("Ss831Cc#2521~")
// // await newpage.locator("input#idSIButton9").click();
// // await newpage.waitForTimeout(3000)
// // await newpage.locator("input#idBtn_Back").click();
// // // await newpage.waitForTimeout(15000) or below syntax 
// // await newpage.waitForLoadState("networkidle")

// // // Verify Dashboard loaded
// // await expect(newpage).toHaveURL(/dashboard/)

// // // Click Active Jobs tile arrow
// // const activeJobsArrow = newpage.locator(
// //     "div.dashboard-sm-card >> svg, div.dashboard-sm-card >> .arrow"
// // ).first();

// // // Alternative if above doesn't work:
// // // const activeJobsArrow = newpage.locator("div.dashboard-sm-card").first().locator("button, a").last();

// // await activeJobsArrow.click();

// // // Wait for navigation
// // await newpage.waitForURL("**/manage-job/list");

// // // Verify user landed on Job Posts page
// // await expect(newpage).toHaveTitle(/ATS - Job Posts/);

// // // Verify Submitted Jobs tab is visible
// // await expect(
// //     newpage.locator("a[href='/manage-job/list']")
// // ).toContainText("Submitted Jobs");

// // // Verify Active filter is applied
// // await expect(
// //     newpage.locator("span.filters-data-wrap")
// // ).toContainText("Active");

// // console.log("Successfully navigated to Active Jobs page");
// // })


// // if we want to extract validation msg in console  if we are giving usrname/password incorrect
// //ex =
// // await newpage.locator("[type='password']").fill("Neelamdeepak")
// // await newpage.locator("input#idSIButton9").click();
//  // console.log(newpage.locator("locator id ").textContent())


//  //if we want to make sure the validation message is correct or not then will use assertion 
//   //EX -
// //await newpage.locator("input#i0116").fill("shresti.singh@bbsihq.co")
// // await newpage.waitForTimeout(4000)
// // await newpage.locator("input#idSIButton9").click()
// // console.log(await newpage.locator("#usernameError").textContent()) - it will provide validation msg in comsole
// // await expect(newpage.locator("#usernameError")).toContainText("accountuioo") - it will give results pass or failed 
// // whether msg passed is correct or not



//  // if we want ot user assertion to find the title of the page then will use {page} fixature and use 
//  //below Syntax

//  //test.only('scenario2',async ({page})=>

// //     {
// //      await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
// //      console.log(await page.title())
// //      await expect(page).toHaveTitle("Let's Shop");
// // })

// // if we want to run specfic scenarios pass then we need to declare "only" like above code 

const {test,expect}=require("@playwright/test")
test ( 'checkboxandradiobthtestcases',async({browser})=>
{
const newbrowser= await browser.newContext()
const newpage=await newbrowser.newPage()
await newpage.goto("https://atsuat.bbsi.com/login")
await newpage.waitForTimeout(3000)
await newpage.locator('input#input-vaadin-email-field-6').fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.waitForTimeout(3000)
await newpage.locator("[tabindex='0']").click()
await newpage.locator("#i0116").fill("chaitanya.chintalapudi@bbsihq.com")
await newpage.locator("#idSIButton9").click()
await newpage.locator("#i0118").fill("Ss831Cc#2521~")
await newpage.locator("#idSIButton9").click();
await newpage.waitForTimeout(3000)
await newpage.locator("#KmsiCheckboxField").click()
await expect (newpage.locator("#KmsiCheckboxField")).toBeChecked()
await newpage.locator("#KmsiCheckboxField").uncheck()
await expect(newpage.locator("#KmsiCheckboxField")).not.toBeChecked();
// or expect (await  newpage.locator("#KmsiCheckboxField").isChecked()).toBeFalsy()
await newpage.locator("input#idSIButton9").click()
await newpage.waitForTimeout(8000)
await newpage.locator(".hamburger-menu").click()
await newpage.locator(".active").nth(0).click()
await newpage.waitForTimeout(5000)
await newpage.locator(".btn-link.text-primary.d-flex.align-item-center.gap-1").click()
await newpage.waitForTimeout(3000)
await newpage.locator("[formcontrolname='companyJobBoardId']").selectOption(" Indeed ")
await newpage.locator("input.form-control.ng-touched.ng-pristine.ng-invalid").fill("ssingh@osius.com")
await newpage.locator("select#jbi-add-jb-sv2").selectOption("Active")
await newpage.locator("#jbi-add-jb-cbtn").click()
await newpage.locator("#cancel_no").click()
await newpage.waitForTimeout(5000)
await newpage.locator("#jbi-add-jb-sbtn").click()
await newpage.waitForTimeout(3000)
console.log(await newpage.locator("[role='alert']").textContent())
await expect (newpage.locator("[role='alert']")).toContainText("already")
await newpage.locator("#jbi-add-jb-cbtn").click()
await newpage.locator("#cancel_yes").click()
await newpage.waitForTimeout(3000)
await newpage.locator(".hamburger-menu").click()
await newpage.locator(".sidemenu-wrapper a").nth(4).click()
await newpage.waitForTimeout(3000)
await newpage.locator(".btn-link.text-primary.d-inline-flex.align-items-center.gap-1").click()
await newpage.locator("[placeholder='Enter Text']").nth(0).fill("Quiz 1")
await newpage.locator("[placeholder='Enter Text']").nth(1).fill ("10")
await newpage.locator("input#quizActiveCheckBox1").check()
await expect(newpage.locator("input#quizActiveCheckBox1")).toBeChecked()
await newpage.locator("input#quizActiveCheckBox1").uncheck()
await expect (newpage.locator("input#quizActiveCheckBox1")).not.toBeChecked()
await newpage.waitForTimeout(4000)
await newpage.locator(".btn-link.text-primary.position-relative.d-inline-flex.align-items-center.gap-1").click()
await newpage.locator("[maxlength='200']").fill("question 1")

await newpage.locator('ng-multiselect-dropdown.dropdown-btn').click();
await newpage.getByText('True/False', { exact: true }).click();

await newpage.locator("[formcontrolname='score']").fill("10")

const trueRadio = newpage.locator("[type='radio']").first();
await trueRadio.click();
await expect(trueRadio).toBeChecked();

await newpage.locator(".btn.btn-primary.flex-grow-1.flex-sm-grow-0.flex-basis-half.flex-basis-sm-auto").click()
await newpage.waitForTimeout(4000)
})



 