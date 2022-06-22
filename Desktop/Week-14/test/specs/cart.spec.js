const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ItemsPage = require('../pageobjects/items.page');
const CartPage = require ('../pageobjects/cart.page')
const CartCheckoutOnePage = require('../pageobjects/cartCheckoutOne.page');

describe ('Cart page testing', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  });
  describe('Login with valid user', () => {

    it('Login success', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user','secret_sauce');
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
  });

  describe ('Cart content page', () => {
    it ('Checking item to be present in cart', async () => {
      await InventoryPage.backpackAdd.click();
      await CartPage.checkoutBtn.click();
      await expect(InventoryPage.cartInventoryItemName).toBeDisplayed();
    });

    it ('Check cart quantity number to be present', async() => {
      const cartQuantity = await $('.cart_quantity');
      await expect(cartQuantity).toBePresent();
    });

    it('Checking item link to have href', async () => {
      const cartInventoryItemName = await $('#item_4_title_link');
      await expect(cartInventoryItemName).toHaveHrefContaining('#');
    });

    it('Checking inventory item description to exist', async () => {
      const cartInventoryItemDescription = await $('.inventory_item_desc');
      await expect(cartInventoryItemDescription).toExist();
    });

    it('Checking inventory item price to exist', async () => {
      const cartInventoryItemPrice = await $('.item_pricebar');
      await expect(cartInventoryItemPrice).toBeExisting();
    });

    it('Checking Remove button functions properly', async () => {
      await CartPage.cartRemoveBtn.click();
      const cartQuantity = await $('.cart_quantity');
      await expect(cartQuantity).not.toBePresent();
    });
  });
});
