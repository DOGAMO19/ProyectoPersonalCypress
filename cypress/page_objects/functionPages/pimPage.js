/// reference <types="cypress" />

/*
    //Usar then para extraer el valor del input y a partir de ahí hacer el if
    cy.contains('label','Nickname').parent().siblings().find('input').then( valueNickname => {
        const valueInputNicknameExtraict = valueNickname.val();
        if(valueInputNicknameExtraict){
            expect(valueInputNicknameExtraict).equal(employeeUsername);
       }
    })
*/

class pimPageFunctions { 





    addEmployee(employeeFirstName,employeeMiddleName,employeeLastName,employeeId,employeeUsername,employeePassword){
        cy.get('form').within(() => {
            cy.get('input[placeholder="First Name"]').type(employeeFirstName);
            cy.get('input[placeholder="Middle Name"]').type(employeeMiddleName);
            cy.get('input[placeholder="Last Name"]').type(employeeLastName);
            cy.contains('label','Employee Id').should('be.visible').parent().siblings().find('input').clear().type(employeeId);
            cy.get('input[type="checkbox"]').check({force:true});
            cy.get('input[type="checkbox"]').should('be.checked');
            cy.contains('label','Username').parent().siblings().find('input').type(employeeUsername); //Encontramos el label del input, regresamos con parent al padre de ese elemento, con siblings encontramos a sus hermanos de ese padre y con find buscamos el input
            cy.contains('label','Password').parent().siblings().find('input').type(employeePassword);
            cy.contains('label','Confirm Password').parent().siblings().find('input').type(employeePassword);
            cy.contains('button','Save').should('be.visible').click();
        }) 

       cy.contains('p','Successfully Saved',{timeout:10000}).should('be.visible');
    }


    employeeListForm(){

    }

    employeListView(employeeFirstName,employeeMiddleName,employeeLastName,employeeId){
        cy.contains('h6', `${employeeFirstName} ${employeeLastName}`,{timeout:7000}).should('be.visible');
        cy.get('form', {timeout:7000}).within(() => {
            cy.get('input[placeholder="First Name"]').should('have.value',employeeFirstName);
            cy.get('input[placeholder="Middle Name"]').should('have.value',employeeMiddleName);
            cy.get('input[placeholder="Last Name"]').should('have.value',employeeLastName);          
            cy.contains('label','Employee Id').parent().siblings().find('input').should('have.value',employeeId);
        })
    }

}

export const pimPageHandle = new pimPageFunctions();