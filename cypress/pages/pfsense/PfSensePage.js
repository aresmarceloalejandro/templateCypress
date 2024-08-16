class PfSensePage {
  elements = {
    usernameInput: () => cy.get("[id='usernamefld']"),
    passwordInput: () => cy.get("[id='passwordfld']"),
    submitBtn: () => cy.get("[name='login']"),
    navBar: (value) => cy.get("[id='pf-navbar'] li[class='dropdown'] > a").contains(value),
    navBarOption: (value) => cy.get("li[class='dropdown open'] li > a").contains(value),
    downloadConfigButton: () => cy.get("[name='download']"),
  };

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.submitBtn().click();
    }

  selectNavBarOptions(navbar,option){
    this.elements.navBar(navbar).click();
    this.elements.navBarOption(option).click();
  }

  downloadConfigXML() {
    this.elements.downloadConfigButton().click();
  }
}

export const pfSensePage = new PfSensePage();
