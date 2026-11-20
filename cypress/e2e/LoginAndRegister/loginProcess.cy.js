/// reference <types="cypress" />

const { useFormLogin } = require("../../page_objects/loginPageForm");
const { actionResetPassword } = require("../../page_objects/resetPasswordPage");



describe( 'Login Process - Happy Path and Test To Fail', () => {

    beforeEach('Open test application', () => {
    cy.visit('/web/index.php/auth/login');
    });

    it('Happy Path Login', () =>{    
        //Usamos las variables de ambiente y las iteramos con la variable env , despues llamamos a la funcion de submitLogin y pasamos por argumento los valores de estos
       cy.env(['USERNAME_REAL','PASSWORD_REAL']).then( (env) => {
            
            useFormLogin.submitLogin(
                env.USERNAME_REAL,
                env.PASSWORD_REAL
            );
       })
    })


    it('Login with invalid username', () => {
         cy.env(['PASSWORD_REAL']).then( (env) => {
            
            useFormLogin.submitLogin(
                'Daniel19',
                env.PASSWORD_REAL
            );
       })
       cy.get('.orangehrm-login-error').contains('p', 'Invalid credentials').should('be.visible');

    })


    it('Login with invalid password', () => {
        cy.env(['USERNAME_REAL']).then( (env) => {  
            useFormLogin.submitLogin(
                env.USERNAME_REAL,
                '1234PASS'
            );
       }) 
       cy.get('.orangehrm-login-error').contains('p', 'Invalid credentials').should('be.visible');    
    });


    it('Login with username and password invalid', () => {

        useFormLogin.submitLogin(
            'AdminFake',
            'admin1231293'
        );
        cy.get('.orangehrm-login-error').contains('p', 'Invalid credentials').should('be.visible'); 
    });

});


describe('Forgot Password Actions' , () => {

    beforeEach('Open test application', () => {
    cy.visit('/web/index.php/auth/login');
    });


    it('Forgot Password Process', () => {
        cy.contains('p','Forgot your password? ').should('be.visible').click();
        actionResetPassword.submitFormResetPassword();
    })   
    
    
    it.only('Select Forgot Password and after cancel the process', () => {
        cy.contains('p','Forgot your password? ').should('be.visible').click();
        cy.contains('button',' Cancel ').click();
        cy.contains('h5', 'Login').should('be.visible');
    })



});
