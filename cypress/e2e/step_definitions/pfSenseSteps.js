import {
    Given,
    When,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {pfSensePage} from '@pages/pfsense/PfSensePage'

  
  Given("Go to pfsense ip: {string}", (ip) => {
    cy.visit(`http://${ip}/services_acb_settings.php`);
  });

  When("Go to the section for download report", () => {
    pfSensePage.submitLogin("admin","QRS$2018")
  });

  When("Go to {string}-{string} and download the Config XML", (navBar,option) => {
    pfSensePage.selectNavBarOptions(navBar,option)
    pfSensePage.downloadConfigXML()
  });