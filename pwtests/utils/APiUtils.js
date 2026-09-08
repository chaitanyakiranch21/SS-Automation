class APiUtils 
{
    constructor(apiContext, loginPayLoad) 
    {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
 
    async getToken() 
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            });

            const loginResponseJson = await loginResponse.json();
            const token = loginResponseJson.token;
            console.log(token);
            return token;
    }
 
    async createOrder(orderPayLoad) 
    {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data: orderPayLoad,
                headers: 
                {
                    'Authorization': response.token,
                    'Content-Type': 'application/json',
                }
            });
 
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
 
        return response;
    }

    async addToCart(addToCartPayload)
    {
        let response = {};
        response.token = await this.getToken();

        const addCartResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
            {
                data: addToCartPayload,
                headers:
                {
                    Authorization: response.token,
                    "Content-Type":"application/json"
                }
            });

        const addCartJson = await addCartResponse.json();
        console.log(addCartJson);
        response.message = addCartJson.message;
        return response;
    }

    async deleteFromCart(cartId, productId)
    {
        let response = {};
        response.token = await this.getToken();

        const deleteResponse = await this.apiContext.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/${cartId}/${productId}",
            {
                headers:
                {
                    Authorization: response.token
                }
            });

        const deleteJson = await deleteResponse.json();
        console.log(deleteJson);
        response.message = deleteJson.message;
        return response;
    }
}
 
module.exports = { APiUtils };