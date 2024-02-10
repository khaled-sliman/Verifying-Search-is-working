import { test, expect } from '@playwright/test';

test('SearchInEnglish', async ({ page }) => {


    // Here i will open the jumia page
    await page.goto('https://jumia.com/');



    //Here i will close the ad that appears after opening the website (I used Xpath to locate the close icon)
    await page.click('//button[@aria-label="newsletter_popup_close-cta"]');



    //Here i will type 'hoodie' word in the search field (I used Xpath and placeholder as locator (Not the best practice here anyway))
    await page.fill('//input[@placeholder="Search products, brands and categories"]', 'hoodie');


    //Here i will click on the search button (I used CSS selector here)
    await page.click('#search > button');


  
    //Here i will go to the first search result and i will check if the name of this result contains "hoodie" or "sweat shirt" or "سويت شيرت" words and if it doesn't contains any of these words, i will ask it to print me the name of this product, so i can know where's the problem
    
    const FirstSearchResult = await page.textContent('(//div[@class="info"])[1]')

    const FirstSearchResultLowerCase = FirstSearchResult?.toLowerCase();

    console.log(FirstSearchResultLowerCase);

    if (FirstSearchResultLowerCase?.includes("hoodie") ||
        FirstSearchResultLowerCase?.includes("سويت شيرت") ||
        FirstSearchResultLowerCase?.includes("sweatshirt") ||
        FirstSearchResultLowerCase?.includes("sweat shirt"))
      {
        console.log("Seacrh Function is working very well");
      } else {
        throw new Error('There is an accuracy bug in the search functionality because the product that appears in the search results is ' + FirstSearchResultLowerCase );
      }

})