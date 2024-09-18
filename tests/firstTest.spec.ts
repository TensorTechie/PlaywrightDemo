import{expect, test} from '@playwright/test'
import { text } from 'stream/consumers';

test('The First letter', async ({page}) => {
 await page.goto('https://otel-demo.field-eng.grafana.net/');
 await page.locator('//button[@class="sc-997da79c-0 sc-aa7fd9c-5 jOUwGo ibGCih"]').click();
 await page.locator('//select[@name="currency_code"]').selectOption("INR");
 await page.getByText('Roof Binoculars').click();
 await page.locator('//select[@data-cy="product-quantity"]').selectOption("3");
 await page.locator('//button[@data-cy="product-add-to-cart"]').click();
 await page.locator('#email').fill("someone1@example.com");
 await page.locator('#street_address').fill("Zambazar");
 await page.locator('#zip_code').fill("123456");
 await page.locator('#city').fill("Chennai");
 await page.locator('#state').fill("TamilNadu");
 await page.locator('#country').fill("India");
 await page.locator('#credit_card_number').fill("1234-5678-9012-3456");
 await page.locator('#credit_card_expiration_month').selectOption("October");
 await page.locator('#credit_card_expiration_year').selectOption("2040")
 await page.locator('#credit_card_cvv').fill("786");
 const orderPlace = page.locator('//button[text()="Place Order"]');
 expect(orderPlace).toBeEnabled();
 await page.waitForTimeout(2000);
 await orderPlace.click();
 await page.waitForTimeout(10000);
//  await page.waitForEvent("domcontentloaded");
//  const orderConformationMessage = await page.getByText('Your order is complete!').textContent();
//  expect(orderConformationMessage).toBe("Your order is complete!");
//  await page.pause();

//  const currrencies = await page.locator('//span[@data-cy="product-price"]').textContent();
//  for(const currrency of  currrencies){
//  expect(currrency).toHaveText("₹");
//  }
})
