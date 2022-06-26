const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ItemsPage = require('../pageobjects/items.page');
const CartPage = require ('../pageobjects/cart.page')
const CartCheckoutOnePage = require('../pageobjects/cartCheckoutOne.page');
const CartCheckoutTwoPage = require('../pageobjects/cartCheckoutTwo.page');

describe ('Cart second step checkout', () => {

  beforeAll('Open checkout step two', async() => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.backpackAdd.click();
    await InventoryPage.cartLink.click();
    await CartPage.checkoutBtn.click();
    await CartCheckoutOnePage.fillCheckoutBoxes('Name','LastName','2000');
    await CartCheckoutOnePage.continueBtn.click();
  });

  describe('Testing the information displayed', () => {

    it('Checking summary information div to exist', async() => {
      await expect(CartCheckoutTwoPage.summaryInfoDiv).toBeDisplayed();
    });

    it('Checking summary subtotal label to contain text', async () => {
      await expect(CartCheckoutTwoPage.summarySubtotalLabel).toHaveTextContaining('Item total:');
    });

    it('Checking summary summary tax label to contain text', async () => {
      await expect(CartCheckoutTwoPage.summaryTaxLabel).toHaveTextContaining('Tax:');
    });

    it('Checking summary summary total label to contain text', async () => {
      await expect(CartCheckoutTwoPage.summaryTotalLabel).toHaveTextContaining('Total:');
    });

    it('Checking finish button to be clickable', async () => {
      await expect(CartCheckoutTwoPage.finishBtn).toBeClickable();
    })

  });
})