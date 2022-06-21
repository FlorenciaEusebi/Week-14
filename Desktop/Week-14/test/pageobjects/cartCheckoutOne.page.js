class CartCheckoutOnePage {

 get firstNameInput () { return $('#first-name') };
 get lastNameInput () { return $('#last-name') };
 get zipCodeInput () { return $('#postal-code') };
 get cancelBtn () { return $('#cancel') };
 get continueBtn () { return $('#continue') };
 get errorContainer () { return $('.error-message-container.error') };

 async fillCheckoutBoxes (firstName,lastName,zipCode) {
   await this.firstNameInput.setValue(firstName);
   await this.lastNameInput.setValue(lastName);
   await this.zipCodeInput.setValue(zipCode);
 }
}

module.exports = new CartCheckoutOnePage ();