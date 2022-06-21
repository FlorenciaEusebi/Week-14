const CartPage = require ('../pageobjects/cart.page')
const CartCheckoutOnePage = require('../pageobjects/cartCheckoutOne.page');
const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const ItemsPage = require('../pageobjects/items.page');
const { cancelBtn } = require('../pageobjects/cartCheckoutOne.page');

describe ('Checking input fields', () => {

  beforeAll('Open checkout one page', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.backpackAdd.click();
    await CartPage.checkoutBtn.click();
  });

  it ('Checking input fields to be completed correctly', async () => {
    await CartCheckoutOnePage.fillCheckoutBoxes('Test', 'Answer', '2000');
    await CartCheckoutOnePage.continueBtn.click();
    await expect(browser).toHaveLink('https://www.saucedemo.com/checkout-step-two.html');
  });

  it ('Checking cancel button to be clickable', async () => {
    const cancelBtn = await $ ('#cancel');
    await expect (cancelBtn).toBeClickable();
  });

  it ('Checking continue button to be clickable', async () => {
    const continueBtn = await $ ('#continue');
    await expect (continueBtn).toBeClickable();
  });

  it ('Checking input fields to display an error message', async () => {
    await CartCheckoutOnePage.fillCheckoutBoxes('','Answer','2000');
    await CartCheckoutOnePage.continueBtn.click();
    await expect(CartCheckoutOnePage.errorContainer).toHaveText('Error: First Name is required');
  });

});
