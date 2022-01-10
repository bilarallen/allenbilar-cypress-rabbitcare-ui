import qoutationpage from "../qoutation/qoutationpage";
import questionpage from "../question/questionpage";

let qoutation = new qoutationpage()
let question = new questionpage()
export default class {
    performSearchFilter(amount){
        qoutation.txtMaximumPremium()
        .should('be.visible')
        .scrollIntoView()
        .clear()
        .type(amount)

        qoutation.btnInsurerClearFilter().click()
        qoutation.cbMuangThai()
        .scrollIntoView().check({force:true}); 
        cy.wait(1000) 
        qoutation.btnApply().click()
    }

    performAddProductForComparison(){
        qoutation.btnCompareProductA().scrollIntoView().click()
        qoutation.btnCompareProductB().scrollIntoView().click()
        qoutation.btnCompare().scrollIntoView().click()
    }

    performValidationOfCompareProducts(){
        qoutation.lblPackageDetails().should('be.visible')
        qoutation.lblPA1().scrollIntoView().should('be.visible')
        qoutation.lblPA2().scrollIntoView().should('be.visible')
        qoutation.lblAdditionalCoverage().scrollIntoView().should('be.visible')
    }
}