const LoginPage = require('../pageobjects/login.page')

describe ('Login page testing', () => {

  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  })
  describe('Username input test', () => {
    it('Empty username should display an error', async () => {
      await LoginPage.login('','secret_sauce');
      await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    })
    it('Invalid username', async () => {
      await LoginPage.login('invalid','secret_sauce');
      await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
  })
  describe('Elements to be displayed', () => {
    it('Verify botImg to be displayed', async () =>{
      await expect(LoginPage.botImg).toBeDisplayed();
    })
    it ('Verify login logo', async () => {
      await expect(LoginPage.loginLogo).toBeDisplayed();
    })
  })
  describe('Checking log in content with success login', () => {
    it('Img content', async () => {
    await LoginPage.login('standard_user','secret_sauce');
    const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
    await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
    })
  })

})
