import { test, expect, chromium } from '@playwright/test';
import { Console } from 'console';

test('VerifySearchIsworking', async ({ page }) => {


    // Here i will open the jumia page
    await page.goto('https://jumia.com/');



    //Here i will close the ad that appears after opening the website (I used Xpath to locate the close icon)
    await page.click('//button[@aria-label="newsletter_popup_close-cta"]');



    //Here i will type 'hoodie' word in the search field (I used Xpath and placeholder as locator (Not the best practice here anyway))
    await page.fill('//input[@placeholder="Search products, brands and categories"]', 'hoodie');


    //Here i will click on the search button (I used CSS selector here)
    await page.click('#search > button');

    //Here i will get the name of the first result that appears
    const SearchResult1 = await page.textContent('(//div[@class="info"])[1]')

    //Here i will do another search for different product (while i am being in the search page of the first product)
    await page.fill('//input[@placeholder="Search products, brands and categories"]', 'Shoes');
    await page.click('#search > button');

    await page.waitForTimeout(500);
    //Here i will get the name of the first search result that will appear in my second search
    const SearchResult2 = await page.textContent('(//div[@class="info"])[1]')

    //Here i will compare them with each others to verify that test case
    expect(SearchResult1).not.toEqual(SearchResult2);
    console.log(SearchResult1);
    console.log(SearchResult2);
    

})