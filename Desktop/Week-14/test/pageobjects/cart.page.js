class CartPage {

  get cartQuantity () { return $('.cart_quantity') };
  get cartInventoryItemName () { return $('#item_4_title_link') };
  get cartInventoryItemDescription () { return $ ('.inventory_item_desc') };
  get cartInventoryItemPrice () { return $('.item_pricebar') };
  get cartRemoveBtn () { return $('#remove-sauce-labs-backpack') };
  get continueShoppingBtn () { return $('#continue-shopping') };
  get checkoutBtn () { return $('#checkout') };

  open () {
    return browser.url('https://www.saucedemo.com/cart.html');
  }

  async login(username, password) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.btnLogin.click();
  }

  async addProducts  () {
    await this.backpackAdd.click();
  }
}
module.exports = new CartPage