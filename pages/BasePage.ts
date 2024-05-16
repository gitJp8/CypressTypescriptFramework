import * as testData from '../test-data/test-data.json';
export default class BasePage {
    visit(url: string): void {
      cy.visit(url);
    }

    find_element(locator: string) {
      return cy.get(locator);
    }
  
    get_element(locator: string): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(locator);
    }
  
    click_element(locator: string): void {
      this.get_element(locator).click();
    }
  
    typeIntoElement(locator: string, text: string): void {
      this.get_element(locator).type(text);
    }

    press_enter(locator: string){
      this.get_element(locator).type('{enter}');
    }


    scroll_to_element(locator: string){
      this.get_element(locator).scrollIntoView();
    }

    scroll_to_coordinates(x_coord: string, y_coord: string){
      cy.scrollTo(x_coord, y_coord);
    }

    refresh(){
      cy.reload();
    }

    close_browser_tab(){
      //Close the current tab
      cy.window().then((win)=>{
        win.close();
      });
    }

    switch_between_browser_tabs(window_id: number){
      for(let i=0; i<window_id; i++){
        cy.window().then((win)=>{
          win.open('', '_blank');
          win.focus();
        });
      }
    }

    execute_script(script: string): any{
      return eval(script);
    }

    execute_async_script(script: string): Promise<any>{
      return eval(script);
    }

  }
  