const{test,expect,request}=require('@playwright/test')

const logindata={userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
const Addtocart={_id:"6a1d617c17ee3e78baaef95f",product:{_id:"6960eae1c941646b7a8b3ed3",productName:"ADIDAS ORIGINAL",productCategory:"electronics",productSubCategory:"mobiles",productPrice:11500,productDescription:"Apple phone",productImage:"https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg",productRating:"0",productTotalOrders:"0",productStatus:true,productFor:"women",productAddedBy:"admin",v:0}}
const message ={message:"Product Removed from cart"}

let response
let gettoken

test.beforeAll(async()=>
{
    const context= await request.newContext()
    const loginheaders= await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:logindata
        })

        expect (loginheaders.ok()).toBeTruthy()
        response = await loginheaders.json()
        console.log(response)
        gettoken=response.token
        console.log(gettoken)
        
        const Addcart=await context.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
            {
                data:Addtocart,
                headers:
                {
                    'authorization': gettoken,
                    "content-type" : "application/json",
                }
            })
            
            const cartid=await Addcart.json()
            const cartresponse= cartid.message
            console.log(cartresponse)
            
        const deleteorder=await context.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",
            {
                headers:
                {
                    'authorization': gettoken,
                }
            })
            
            const results=await deleteorder.json()
            console.log(results)
            await expect(results).toEqual(message)
        })

test ("tokenstorage",async({page})=>
    {
        await page.addInitScript(value=>
            {
                window.localStorage.setItem("token",value)
            },gettoken)

            await page.goto("https://rahulshettyacademy.com/client/")
            await page.locator(".btn.btn-custom").nth(2).click()
        }
    )
            
            