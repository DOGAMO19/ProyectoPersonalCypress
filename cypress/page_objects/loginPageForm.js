

class FormLogin {



    submitLogin(email, password){
        cy.get('input[placeholder="Username"]').type(email);
        cy.get('input[placeholder="Password"]').type(password);
        cy.contains('button',' Login ').click();
    }

    enterForgotPassword(){
        cy.contains('div', '.orangehrm-login-forgot').click();
    }
}

export const useFormLogin = new FormLogin();