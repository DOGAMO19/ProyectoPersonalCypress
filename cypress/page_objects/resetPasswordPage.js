

class resetPassPage {

    submitFormResetPassword(){
        cy.get('div[class="orangehrm-card-container"]').should('be.visible');
        cy.contains('h6','Reset Password').should('be.visible');
        cy.get('input[placeholder="Username"]').should('be.visible').type('Admin');
        cy.contains('button',' Reset Password ').should('be.visible');//.click();
    }

}


export const actionResetPassword = new resetPassPage();