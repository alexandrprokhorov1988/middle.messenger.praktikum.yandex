export const authorizationTemplate = `section.form
    p.form__title Вход
       form.form__form(name="authorization")
         | !{loginInput}
         | !{passwordInput}
         button.form__submit-button Авторизоваться
       | !{linkButton}`;
