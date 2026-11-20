


class adminPageFunctions{


    addNewSystemUser(employeeName){
        cy.contains('button',' Add ').click();
        cy.get('form').within( ()  => {
            cy.contains('label','User Role').parent().siblings().find('.oxd-select-text').click();
            cy.get('[role="listbox"]').should('be.visible');
            cy.contains('[role="option"]','Admin').click();
            cy.contains('label','User Role').parent().siblings().find('.oxd-select-text').should('have.text','Admin');
            cy.get('input[placeholder="Type for hints..."]').should('be.visible').type(employeeName);
            cy.wait(2000);
            cy.get('[role="listbox"]',{timeou:8000}).should('be.visible');
            cy.get('[role="option"]', {timeout:5000}).last().should('be.visible').click();
            cy.contains('label','Status').parent().siblings().find('.oxd-select-text').click();
            cy.get('[role="listbox"]').should('be.visible');
            //cy.contains('[role="listbox"]').should('be.visible');
            cy.contains('[role="option"]','Enable').click();
            cy.contains('label','Status').parent().siblings().find('.oxd-select-text').should('have.text','Enabled');

        })

    }

}

export const hanldeAdminProcess = new adminPageFunctions();