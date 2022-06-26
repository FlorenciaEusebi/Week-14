const inventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const ItemsPage = require ('../pageobjects/items.page');

describe ('Login page testing', () => {

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

  describe('Open item description', () => {

    it('Checking title link', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user','secret_sauce');
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      await expect(ItemsPage.itemLink).toHaveHrefContaining('#')
      await ItemsPage.itemLink.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    });
  
    it('Checking description container', async () => {
      await expect(ItemsPage.itemContainer).toBeExisting();
    });

    it('Checking add button is clickable', async () => {
      await expect (ItemsPage.addBtn).toBeClickable();
    });

    it('Checking back to products button is clickable', async () => {
      await expect (ItemsPage.backBtn).toBeClickable();
    });
  });

})