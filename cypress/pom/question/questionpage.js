export default class {

    lblquestion(questionValue){
        return cy.xpath('//label[normalize-space()=\''+questionValue+'\']')
    }

    btnProduct(productValue){
        return cy.xpath('//label[normalize-space()=\''+productValue+'\']')
    }

    btnPAPlan(paPlanValue){
        return cy.xpath('//label[normalize-space()=\''+paPlanValue+'\']')
    }

    rbPACoverage(paCoverageValue){
        return cy.xpath('//div[@data-testid=\''+paCoverageValue+'\']//div[@class=\'card-body\']')
    }

    btnPACoverageNext(){
        return cy.xpath('//div[contains(@data-testid,\'ipdopdcoverage\')]//div[3]//div[2]//div[1]//button[1]')
    }

    txtDateOfBirth(){
        return cy.xpath('//input[@name=\'customer_dob\']')
    }

    btnDobNext(){
        return cy.xpath('//div[@data-testid=\'customer_dob\']//div[2]//div[1]//button[1]')
    }

    drpNationality(){
        return cy.xpath('//select[contains(@name,\'customer_nationality\')]')
    }

    txtPhoneNumber(){
        return cy.xpath('//input[@data-testid=\'phone-input\']')
    }

    btnPhoneNumberNext(){
        return cy.xpath('//div[@data-testid=\'customer_phone\']//div[2]//div[1]//button[1]')
    }

    txtFirstName(){
        return cy.xpath('//input[@name=\'customer_first_name\']')
    }

    txtLastName(){
        return cy.xpath('//input[@name=\'customer_last_name\']')
    }

    btnNameNext(){
        return cy.xpath('//div[@data-testid=\'customer_first_name\']//button[@type=\'button\'][normalize-space()=\'Next\']')
    }

    txtEmail(){
        return cy.xpath('//input[@data-testid=\'email-input\']')
    }

    btnEmailNext(){
        return cy.xpath('//div[@data-testid=\'customer_email\']//div[2]//div[1]//button[1]')
    }

    rbGender(genderValue){
        return cy.xpath('//label[normalize-space()=\''+genderValue+'\']')
    }

    rbIsConsent(consentValue){
        return cy.xpath('//label[normalize-space()=\''+consentValue+'\']')
    }

    btnShowPackages(){
        return cy.xpath('//button[normalize-space()=\'Show Packages\']')
    }


}