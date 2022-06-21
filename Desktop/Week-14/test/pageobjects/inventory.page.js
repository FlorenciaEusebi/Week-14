class InventoryPage {

  //Getters
  get backpackImg () { return $('#item_4_img_link')}
  get backpackTitleLink () { return $('#item_4_title_link')}
  get backpackAdd () { return $('#add-to-cart-sauce-labs-backpack')}
  get backpackRemove () { return $('#remove-sauce-labs-backpack')}

  get bikeLightImg () { return $('#item_0_img_link')}
  get bikeLightTitleLink () { return $('#item_0_title_link')}
  get bikeLightAdd () { return $('#add-to-cart-sauce-labs-bike-light')}
  get bikeLightRemove () { return $('#remove-sauce-labs-bike-light')}

  get tShirtImg () { return $('#item_1_img_link')}
  get tShirtTitleLink () { return $('#item_1_title_link')}
  get tShirtAdd () { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
  get tShirtRemove () { return $('#remove-sauce-labs-bolt-t-shirt')}

  get jacketImg () { return $('#item_5_img_link')}
  get jacketTitleLink () { return $('#item_5_title_link')}
  get jacketAdd () { return $('#add-to-cart-sauce-labs-fleece-jacket')}
  get jacketRemove () { return $('#remove-sauce-labs-fleece-jacket')}

  get onesieImg () { return $('#item_2_img_link')}
  get onesieTitleLink () { return $('#item_2_title_link')}
  get onesieAdd () { return $('#add-to-cart-sauce-labs-onesie')}
  get onesieRemove () { return $('#remove-sauce-labs-onesie')}

  get redTshirtImg () { return $('#item_3_img_link')}
  get redTshirtTitleLink () { return $('#item_3_title_link')}
  get redTshirtRemove () { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)')}

  get inventoryBody () { return $('.inventory_item_label')}
  get inventoryPrice () { return $('.inventory_item_price')}

  get menuBtn () { return $('#react-burger-menu-btn')}
  get cartIcon () { return $('#shopping_cart_container')}

  get spanTitle () { return $('.header_secondary_container')}
  get spanImg () { return $('.peek')}

  get twitterLink () { return $('.social_twitter a')}
  get facebookLink () { return $('.social_facebook a')}
  get linkedinLink () { return $('.social_linkedin a')}

  //Methods
  open () {
    return browser.url('https://www.saucedemo.com/inventory.html');
  }
  async login(username, password) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.btnLogin.click();
  }
  async addAllProducts () {
    await this.backpackAdd.click();
    await this.bikeLightAdd.click();
    await this.tShirtAdd.click();
    await this.jacketAdd.click();
    await this.onesieAdd.click();
    await this.redTshirtAdd.click();
  }
  async removeAllProducts () {
    await this.backpackRemove.click();
    await this.bikeLightRemove.click();
    await this.tShirtRemove.click();
    await this.jacketRemove.click();
    await this.onesieRemove.click();
    await this.redTshirtRemove.click();
  }
}
module.exports = new InventoryPage();