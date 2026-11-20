

class navigationBar {

    adminPage(){
        cy.contains('a','Admin',{timeout:5000}).click();
    }

    pimPage(){
        cy.contains('a', 'PIM' , {timeout:5000}).click();
    }
}


export const navigateTo = new navigationBar();