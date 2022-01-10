export default class{
    txtMaximumPremium(){
        return cy.xpath('(//input[@type=\'number\'])[2]')
    }

    btnInsurerClearFilter(){
        return cy.xpath('//div[@data-testid=\'insurer_section\']//button[@type=\'button\'][normalize-space()=\'Clear All\']')
    }

    cbMuangThai(){
        return cy.xpath('//input[contains(@value,\'MTI_TH\')]')
    }

    btnApply(){
        return cy.xpath('(//button[normalize-space()=\'APPLY\'])[1]')
    }

    btnMoreDetails(){
        return cy.xpath('//button[normalize-space()=\'More Details\']')
    }

   btnCompareProductA(){
       return cy.xpath('(//button[@type=\'button\'])[11]')
   }

   btnCompareProductB(){
    return cy.xpath('(//button[@type=\'button\'])[14]')
   }

   btnCompare(){
    return cy.xpath('//button[normalize-space()=\'COMPARE\']')
   }

   lblPackageDetails(){
       return cy.xpath('//h2[normalize-space()=\'Package Details\']')
   }

   lblPA1(){
    return cy.xpath('//h2[contains(text(),\'Loss of Life, organs, sight, or total permanent di\')]')
   }

   lblPA2(){
    return cy.xpath('//h2[contains(text(),\'Loss of life, dismemberment, loss of sight, loss o\')]')
   }

   lblAdditionalCoverage(){
    return cy.xpath('//h2[normalize-space()=\'Additional coverage\']')
   }

}