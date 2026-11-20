/// reference <types="cypress" />
import { faker } from '@faker-js/faker';
const { pimPageHandle } = require("../../page_objects/functionPages/pimPage");
const { useFormLogin } = require("../../page_objects/loginPageForm");
const { navigateTo } = require("../../page_objects/navigationBarPage");


describe('PIM Page - Validate process', () =>{

    //Variables que generan los valores para addEmployee (E2E - Exitoso)
    const employeeFirstName = faker.person.firstName();
    const employeeMiddleName = faker.person.firstName();
    const employeeLastName = faker.person.lastName();
    const employeeIdUsername = faker.string.numeric(2);
    const employeeUsername = employeeFirstName+employeeIdUsername;
    const employeePassword = faker.internet.password(8)+employeeIdUsername;
    const employeeId = faker.string.numeric(6);

    beforeEach('Open test application', () => {
    cy.visit('/web/index.php/auth/login');
    });

    it('Add Employee E2E - PIM Module - Exitoso' , () => {
    useFormLogin.submitLogin('Admin','admin123');
    navigateTo.pimPage();
    cy.contains('nav[role="navigation"]', 'Add Employee').click();
    //Llamamos a la funcion que agrega un nuevo empleado en la pagina PIM
    pimPageHandle.addEmployee(
            employeeFirstName,
            employeeMiddleName,
            employeeLastName,
            employeeId,
            employeeUsername,
            employeePassword
        );

    pimPageHandle.employeListView(
        employeeFirstName,
        employeeMiddleName,
        employeeLastName,
        employeeId);


    })

})


