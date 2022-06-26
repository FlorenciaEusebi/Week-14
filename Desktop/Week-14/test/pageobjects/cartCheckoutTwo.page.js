class CartCheckoutTwoPage {

  get summaryInfoDiv () { return $('.summary_info') };
  get summarySubtotalLabel () { return $('.summary_subtotal_label') };
  get summaryTaxLabel () { return $('.summary_tax_label') };
  get summaryTotalLabel () { return $('.summary_total_label') };
  get finishBtn () { return $('#finish') };

}

module.exports = new CartCheckoutTwoPage();