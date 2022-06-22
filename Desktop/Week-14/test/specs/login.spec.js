// const LoginPage = require('../pageobjects/login.page')

// describe ('Login page testing', () => {

//   beforeAll('Open browser', () => {
//     browser.url('https://www.saucedemo.com/')
//   });

//   describe('Username input test', () => {

//     it('Empty username should display an error', async () => {
//       await LoginPage.login('','secret_sauce');
//       await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
//     });

//     it('Invalid username', async () => {
//       await LoginPage.login('invalid','secret_sauce');
//       await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
//     });
//   });

//   describe ('Login with locked out user', () => {

//     it('Using locked out user to log in should display an error', async () => {
//       await LoginPage.open();
//       await LoginPage.login('locked_out_user', 'secret_sauce');
//       await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
//     });
//   });

//   describe ('Login with problem user', () => {

//     it('Using problem user to log in', async () => {
//       await LoginPage.open();
//       await LoginPage.login('problem_user', 'secret_sauce');
//       await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
//     });

//     it('Checking images content when accessing with problem user', async () => {
//       const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
//       await expect(imgSrc).toBe('/static/media/sl-404.168b1cce.jpg');
//     });
//   });

//   describe ('Login with performance glitch user', () => {

//     it ('Using performance glitch user to log in', async () => {
//       await LoginPage.open();
//       await LoginPage.login('performance_glitch_user', 'secret_sauce');
//       await browser.setTimeout({'page load': 10000 });
//       await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
//     });
//   });

//   describe('Login with valid user', () => {

//     it('Login success', async () => {
//       await LoginPage.open();
//       await LoginPage.login('standard_user','secret_sauce');
//       await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
//     });
//   });

//   describe('Elements to be displayed', () => {

//     it('Verify botImg to be displayed', async () =>{
//       await LoginPage.open();
//       await expect(LoginPage.botImg).toBeDisplayed();
//     });

//     it ('Verify login logo', async () => {
//       await LoginPage.open();
//       await expect(LoginPage.loginLogo).toBeDisplayed();
//     });

//     it ('Img content', async () => {
//       await LoginPage.login('standard_user','secret_sauce');
//       const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
//       await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
//     });
//   });
// });
