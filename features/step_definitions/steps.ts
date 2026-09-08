// const {Given,When,Then, setDefaultTimeout} = require("@cucumber/cucumber")
// const {benefit}= require("../../pwtests/utils/benefit")
// const {plantype}=require("../../pwtests/utils/plantype")
// const { expect} = require("@playwright/test")

// setDefaultTimeout( 100 *1000)

// Given('I login to application  {string}',async function (url) {

//     this.application= new benefit(this.page)
//     await this.application.goto(url)

// });

// When('I login as a {string} and {string}', async function (username, password) {
//   await this.application.validlogin(username,password)
// });

// Then('I should be able to login successfully',  async function () {
//   await this.page.waitForLoadState("networkidle")
// });

// Then('I should  also see {string} header .',async function (Retirement) {
// await expect(this.page.getByRole("button",{ name : Retirement}).nth(0)).toBeVisible()
// await this.page.locator(".btn.tab-btn.tab-btn-rht.tab-btn-active").click()

// });
// When('I click on {string}',  async function (hamburgermenu) {

//   await this.page.locator(".hamburger-menu").click()
// });

// Then('I should see {string}', async function (RetirementPlanTypes) {
//   await this.page.getByText(RetirementPlanTypes, { exact: true }).click() 
// });

// When('I add {string} successfully', async function (string) {
//    this.retirementplan=new plantype(this.page)

// await this.retirementplan.retirementplanstype()
// });

// Then('I should see snackbar message', async function () {
//   await expect(this.page.locator(".snackbar-message")).toHaveText("Plan name added successfully")
// });


// import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { backtoportal } from "../../Utils/POMFILE_ts/backtoportal";
// import { Benefitlogin } from "../../Utils/POMFILE_ts/Benefitlogin";
// setDefaultTimeout( 300 *1000)


// Given('I login to application with {string}  and {string}', async function (useremail, password) {
//   this.filelogin = new Benefitlogin(this.page)
//     await this.filelogin.goto()
//     await this.filelogin.validlogin(useremail,password)
//     await this.page.waitForLoadState("networkidle")
// });

// When('I click on back to portal', async function () {
// await this.page.locator(".btn.tab-btn.tab-btn-rht").click()

//     this.benefitlink=new backtoportal(this.page)
//     await this.benefitlink.benefitpage()
// });

// Then('it should able to navigatr successfully', function () {
//   console.log ("able to see legacy dashboard")
// });


import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Benefitlogin } from "../../pwtests/utils/Benefitlogin";
import { backtoportal } from "../../pwtests/utils/backtoportal";
setDefaultTimeout( 300 *1000)


Given('I login to application with {string}  and {string}', async function (useremail, password) {
  this.filelogin = new Benefitlogin(this.page)
    await this.filelogin.goto()
    await this.filelogin.validlogin(useremail,password)
    await this.page.waitForLoadState("networkidle")
});

When('I click on back to portal', async function () {
await this.page.locator(".btn.tab-btn.tab-btn-rht").click()

    this.benefitlink=new backtoportal(this.page)
    await this.benefitlink.benefitpage()
});

Then('it should able to navigatr successfully', function () {
  console.log ("able to see legacy dashboard")
});