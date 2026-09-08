const { test, expect, request } = require('@playwright/test');

const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const API_URL = "https://api.eventhub.rahulshettyacademy.com/api";

const YAHOO_USER = {
    email: "shrestiyahoo@yahoo.com",
    password: "Letmein1!"
};

const GMAIL_USER = {
    email: "shrestisingh456@gmail.com",
    password: "Letmein1!"
};

async function loginAs(page, user) {

    await page.goto(BASE_URL);
    await page.locator("#email").fill(user.email);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-btn").click();
    await page.waitForLoadState("networkidle");
}

test("Gmail user cannot access Yahoo booking", async ({ page, request }) => {

    //step1
    const loginRes = await request.post(`${API_URL}/auth/login`,
        {
            data: {
                email: YAHOO_USER.email,
                password: YAHOO_USER.password
            }
        }
    );

    expect(loginRes.ok()).toBeTruthy();
    const loginData = await loginRes.json();
    const token = loginData.token;
    console.log(token);

    //step2
    const eventsRes = await request.get(`${API_URL}/events`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    expect(eventsRes.ok()).toBeTruthy();
    const eventsData = await eventsRes.json();
    const eventId = eventsData.data[3].id;
    console.log(eventId);

    //step3
    const bookingRes = await request.post(`${API_URL}/bookings`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            eventId: eventId,
            customerName: "Shresti",
            customerEmail: YAHOO_USER.email,
            customerPhone: "8686570464",
            quantity: 1
        }
    });

    expect(bookingRes.ok()).toBeTruthy();
    const bookingData = await bookingRes.json();
    console.log(bookingData);
    const yahooBookingId = bookingData.data.id;
    console.log(yahooBookingId);

    //steps-4,5,6
    await loginAs(page, GMAIL_USER);
    await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`,
        {
            waitUntil: "networkidle"
        }
    );

    await expect(page.getByText("Access Denied")).toBeVisible();
    await expect(page.getByText("You are not authorized to view this booking")).toBeVisible();
});