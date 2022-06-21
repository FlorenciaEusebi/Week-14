const inventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const ItemsPage = require ('../pageobjects/items.page');
const { itemLink } = require('../pageobjects/items.page');

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
      const titleLink = await $('#item_4_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
      await itemLink.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    });
  });

  describe ('Backpack inventory description test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('.inventory_details_img_container > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
    })

    it('Checking description container', async () => {
      const inventoryContainer = await $('.inventory_details_desc_container');
      await expect(inventoryContainer).toBeExisting();
    })

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-backpack');
      await expect (addBtn).toBeClickable();
    })

    // it('Checking remove button is clickable', async () => {
    //   const removeBtn = await $('#remove-sauce-labs-backpack');
    //   await expect (removeBtn).toBeClickable();
    // })

    it('Checking back to products button is clickable', async () => {
      const backBtn = await $('#back-to-products');
      await expect (backBtn).toBeClickable();
    })
  })

})