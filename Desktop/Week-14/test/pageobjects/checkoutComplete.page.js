class CheckoutCompletePage {

  get titleComplete () { return $('#checkout_complete_container > h2') };
  get textComplete () { return $('.complete-text') };
  get imgComplete () { return $('#checkout_complete_container > img') };
  get backBtn () { return $('#back-to-products') };

}

module.exports = new CheckoutCompletePage();