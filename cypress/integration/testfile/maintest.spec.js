import "cypress-localstorage-commands";
import questions from "../../pom/question/questionsteps"
import qoutationSteps from "../../pom/qoutation/qoutationsteps"

let question = new questions()
let quotation = new qoutationSteps()

describe('Personal Accident - Validate insurance qoutation and perform comparison', function(){

    before('Precondition', function(){
        cy.visit('/product/health-insurance/questions')
    })

    beforeEach(function(){
        cy.restoreLocalStorage(); 
    })

    afterEach(function (){
        cy.saveLocalStorage();
    })

    it('Populate questions', function(){
        cy.readFile('cypress/fixtures/testdata.json').then((input) =>{
            question.performSelectionOfProduct(input.personalAccidentData['product'])
            question.performSelectionOfPAPlan(input.personalAccidentData['PaPlan'])
            question.performSelectionOfPACoverage(input.personalAccidentData['typeOfPACoverage'])
            question.performInputofBirthDate(input.personalAccidentData['dateOfBirth'])
            question.performSelectionOfNationality(input.personalAccidentData['nationality'])
            question.performInputofPhoneNumber(input.personalAccidentData['phoneNumber'])
            question.performInputOfName(input.personalAccidentData['firstName'], 
                                        input.personalAccidentData['lastName'],)
            question.performInputOfEmail(input.personalAccidentData['email'])
            question.performSelectionOfGender(input.personalAccidentData['gender'])
            question.performConsentAndShowPackages()
        })        
    })

    it('Filter and compare products', function(){
            quotation.performSearchFilter(4000)
            quotation.performAddProductForComparison()
            quotation.performValidationOfCompareProducts()
    })

})