async function getToken(apiContext, loginPayLoad)
{
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayLoad
        }
    );
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log("Token :", token);
    return token;
}


async function createOrder(apiContext, loginPayLoad, orderPayLoad)
{
    const token = await getToken(apiContext, loginPayLoad);

    let response = {};

    response.token = token;

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers:
            {
                Authorization: token,
                "Content-Type":"application/json"
            }
        }
    );

    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    response.orderId = orderResponseJson.orders[0];
    return response;
}

module.exports = { getToken, createOrder };

//test

const { test, expect, request } = require('@playwright/test');
const { createOrder } = require('./utils/APiUtils');
const loginPayLoad = {userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"};
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

let response;

test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    // const apiUtils = {apiContext, loginPayLoad,async getToken(){},async createOrder(orderPayLoad){}};
    response = await createOrder(apiContext,loginPayLoad,orderPayLoad);
});


// code refactoring

