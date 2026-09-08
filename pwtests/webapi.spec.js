const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}; 

let response;
test("apitest",async()=>
{
    const newContext = await request.newContext();
    const loginResponse = await newContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        { 
            data:loginPayLoad
        })

      expect(loginResponse.ok).toBeTruthy()
      const jsonrespnse = await loginResponse.json()
      response = await jsonrespnse.token
      console.log(response)
})

test('client login',async({page})=>
{

  await page.addInitScript(value=>
  {
    window.localStorage.setItem('token',value);
  },response);


await page.goto("https://rahulshettyacademy.com/client/")
    const productdetails= page.locator(".card-body")
    const productname="iphone 13 pro"
}
)
 
