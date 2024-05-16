import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  elements = {
    input_username: "#user-name",
    input_password: "#password",
    btn_login: "#login-button",
    btn_error_message: '//button[@class="error-button"]',
  }
  visit(url: string): void {
    super.visit(url);
  }

  enterUsername(username: string): void {
    super.typeIntoElement(this.elements.input_username, username);
  }

  enterPassword(password: string): void {
    super.typeIntoElement(this.elements.input_password, password);
  }

  submit(): void {
    super.click_element(this.elements.btn_login);
  }
}
