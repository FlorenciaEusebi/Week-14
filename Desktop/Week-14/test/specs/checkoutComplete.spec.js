const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ItemsPage = require('../pageobjects/items.page');
const CartPage = require ('../pageobjects/cart.page')
const CartCheckoutOnePage = require('../pageobjects/cartCheckoutOne.page');
const CartCheckoutTwoPage = require('../pageobjects/cartCheckoutTwo.page');
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page')

describe('testing checkout complete page', () => {

  beforeAll('Open checkout complete page', async() => {

    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.backpackAdd.click();
    await InventoryPage.cartLink.click();
    await CartPage.checkoutBtn.click();
    await CartCheckoutOnePage.fillCheckoutBoxes('Name','LastName','2000');
    await CartCheckoutOnePage.continueBtn.click();
    await CartCheckoutTwoPage.finishBtn.click();
  });

  describe ('Checking elements to be displayed correctly', () => {

    it ('Check title to exist', async () => {
      await expect (CheckoutCompletePage.titleComplete).toHaveText('THANK YOU FOR YOUR ORDER');
    });

    it ('Check text to have class', async () => {
      await expect (CheckoutCompletePage.textComplete).toHaveElementClass('complete-text');
    });

    it ('Check Img to be displayed', async () => {
      await expect (CheckoutCompletePage.imgComplete).toBeDisplayed();
    });

    it ('Check Back Home button to exist', async () => {
      await expect (CheckoutCompletePage.backBtn).toExist();
    });
  })
})