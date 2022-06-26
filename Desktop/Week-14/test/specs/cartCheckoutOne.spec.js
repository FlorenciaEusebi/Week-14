const CartPage = require ('../pageobjects/cart.page')
const CartCheckoutOnePage = require('../pageobjects/cartCheckoutOne.page');
const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const ItemsPage = require('../pageobjects/items.page');

describe ('Checking input fields', () => {

  beforeAll('Open checkout one page', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.backpackAdd.click();
    await InventoryPage.cartLink.click();
    await CartPage.checkoutBtn.click();
  });

  it ('Checking input fields to display an error message', async () => {
    await CartCheckoutOnePage.fillCheckoutBoxes('','Answer','2000');
    await CartCheckoutOnePage.continueBtn.click();
    await expect(CartCheckoutOnePage.errorContainer).toHaveTextContaining('Error: First Name is required');
  });

  it ('Checking continue button to be clickable', async () => {
    await expect (CartCheckoutOnePage.continueBtn).toBeClickable();
  });

  it ('Checking input fields to be completed correctly', async () => {
    await CartCheckoutOnePage.fillCheckoutBoxes('Test', 'Answer', '2000');
    await CartCheckoutOnePage.continueBtn.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
  });

  it ('Checking cancel button to be clickable', async () => {
    await expect (CartCheckoutOnePage.cancelBtn).toBeClickable();
  });



});
