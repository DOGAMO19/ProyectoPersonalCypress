/// reference <types="cypress" />

const { hanldeAdminProcess } = require("../../page_objects/functionPages/adminPage");
const { useFormLogin } = require("../../page_objects/loginPageForm");
const { navigateTo } = require("../../page_objects/navigationBarPage");


describe('Process E2E - Admin Page' , () =>{

   beforeEach('Open test application', () => {
    cy.visit('/web/index.php/auth/login');
    });

    it('Add new System User', () => {
        
        useFormLogin.submitLogin('Admin','admin123');
        navigateTo.adminPage();
        hanldeAdminProcess.addNewSystemUser('A');
    })


});