const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe ('Inventory page testing', () => {

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

  describe ('Backpack inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_4_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-backpack');
      await expect (addBtn).toBeClickable();
    });
  });

  describe ('Bike light inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_0_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/bike-light-1200x1500.a0c9caae.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_0_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-bike-light');
      await expect (addBtn).toBeClickable();
    });
  });

  describe ('T-Shirt inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_1_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/bolt-shirt-1200x1500.c0dae290.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_1_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-bolt-t-shirt');
      await expect (addBtn).toBeClickable();
    });
  });

  describe ('Jacket inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_5_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/sauce-pullover-1200x1500.439fc934.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_5_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-fleece-jacket');
      await expect (addBtn).toBeClickable();
    });
  });

  describe ('Onesie inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_2_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/red-onesie-1200x1500.1b15e1fa.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_2_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });

    it('Checking add button is clickable', async () => {
      const addBtn = await $('#add-to-cart-sauce-labs-onesie');
      await expect(addBtn).toBeClickable();
    });
  });

  describe ('Red T-Shirt inventory test', () => {

    it('Checking Img content', async () => {
      const imgSrc = await $('#item_3_img_link > img').getAttribute('src');
      await expect(imgSrc).toBe('/static/media/red-tatt-1200x1500.e32b4ef9.jpg')
    });

    it('Checking Img title link', async () => {
      const titleLink = await $('#item_3_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });
  });

  describe ('Inventory content', () => {

    it('Checking inventory description content', async () => {
      const inventoryDesc = await $('.inventory_item_label > div');
      await expect(inventoryDesc).toBeExisting();
    });

    it('Checking inventory price content', async () => {
      const titleLink = await $('#item_3_title_link');
      await expect(titleLink).toHaveHrefContaining('#')
    });
  });

  describe ('Header content', () => {

    it('Checking cart button to be existing', async () => {
      const cartIcon = await $('#shopping_cart_container');
      await expect(cartIcon).toBeExisting();
    });

    it('Checking menu button to be clickable', async () => {
      const menuBtn = await $('#react-burger-menu-btn');
      await expect (menuBtn).toBeClickable();
    });
  });

  describe ('Span content', () => {

    it('Checking span image to be displayed', async () => {
      const spanImg = await $('.peek');
      await expect (spanImg).toBeDisplayed();
    });
  });

  describe ('Social Media links', () => {

    it('Checking twitter link', async () => {
      const twitterLink = await $('.social_twitter a');
      await expect(twitterLink).toHaveLink('https://twitter.com/saucelabs');
    });

    it('Checking facebook link', async () => {
      const facebookLink = await $('.social_facebook a');
      await expect(facebookLink).toHaveLink('https://www.facebook.com/saucelabs');
    });

    it('Checking linkedin link', async () => {
      const linkedinLink = await $('.social_linkedin a');
      await expect(linkedinLink).toHaveLink('https://www.linkedin.com/company/sauce-labs/');
    });
  });
})