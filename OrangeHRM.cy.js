import Homepage from "../PageObject/OrangeHRM2.js"


describe('Login', ()=>{


    it('Assertion', () => {
        
       cy.visit('https://opensource-demo.orangehrmlive.com/')
        
      

       cy.fixture('Orangehrm.json').then((data)=>{
        const hp=new Homepage(); 
       hp.setUsername(data.username);
       hp.setPassword(data.password);
       hp.clicksubmit();
       hp.verifyLogin();
       })
    })
    
      


})
