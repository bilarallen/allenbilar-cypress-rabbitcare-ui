import questionpage from "../question/questionpage"

let questionObject = new questionpage()

export default class {

    performSelectionOfProduct(insuranceProduct){
        questionObject.lblquestion('Which product are you looking for?').should('be.visible')
        questionObject.btnProduct(insuranceProduct).click()
    }

    performSelectionOfPAPlan(paPlan){
        questionObject.lblquestion('Which PA plan do you want to be covered?').should('be.visible')
        questionObject.btnPAPlan(paPlan).click()
    }

    performSelectionOfPACoverage(paCoverage){
        cy.get('label[for=\'pacoverage\']').should('be.visible')
        questionObject.rbPACoverage(paCoverage).click()
        questionObject.btnPACoverageNext().click()
    }

    performInputofBirthDate(birthDate){
        //12/12/95
        questionObject.lblquestion('What is the insured date of birth?').should('be.visible')
        questionObject.txtDateOfBirth().click().type(birthDate)
        questionObject.btnDobNext().click()
    }

    performSelectionOfNationality(nationalityCode){
        questionObject.lblquestion('What is your nationality?').should('be.visible')
        questionObject.drpNationality().select(nationalityCode)
    }

    performInputofPhoneNumber(phoneNumber){
        questionObject.lblquestion('What is your phone number?').should('be.visible')
        questionObject.txtPhoneNumber().type(phoneNumber)
        questionObject.btnPhoneNumberNext().click()
    }

    performInputOfName(firstName, lastName){
        questionObject.lblquestion('What is your first name?').should('be.visible')
        questionObject.txtFirstName().type(firstName)
        questionObject.lblquestion('What is your last name?').should('be.visible')
        questionObject.txtLastName().type(lastName)
        questionObject.btnNameNext().click()
    }

    performInputOfEmail(email){
        questionObject.lblquestion('What is your email?').should('be.visible')
        questionObject.txtEmail().type(email)
        questionObject.btnEmailNext().click()
    }

    performSelectionOfGender(gender){
        questionObject.lblquestion('What is your gender?').should('be.visible')
        questionObject.rbGender(gender).click()
    }

    performConsentAndShowPackages(){
        questionObject.rbIsConsent('Consent').click()
        questionObject.btnShowPackages().click()
        cy.wait(5000)
    }

}