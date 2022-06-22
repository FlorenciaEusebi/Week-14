class CheckoutCompletePage {

  get titleComplete () { return $('#checkout_complete_container > h2') };
  get textComplete () { return $('.complete-text') };
  get imgComplete () { return $('#checkout_complete_container > img') };
  get backBtn () { return $('#back-to-products') };

  open () {
    return browser.url('https://www.saucedemo.com/checkout-complete.html');
  }

}

module.exports = new CheckoutCompletePage();