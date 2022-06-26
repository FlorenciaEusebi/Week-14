class ItemsPage {

  //Getters
  get itemLink () { return $('#item_4_title_link')}
  get itemImg () { return $('.item_details_img_container > img')}
  get itemContainer() { return $('.inventory_details_desc_container')}
  get addBtn () { return $('#add-to-cart-sauce-labs-backpack')}
  get removeBtn () { return $('#remove-sauce-labs-backpack')}
  get backBtn () { return $('#back-to-products')}

  //Methods
  async clickItemLink (){
    await this.itemLink.click();
  }
  async addToCart () {
    await this.backpackAdd.click();
  }
  async removeFromCart () {
    await this.backpackRemove.click();
  }
}
module.exports = new ItemsPage();
