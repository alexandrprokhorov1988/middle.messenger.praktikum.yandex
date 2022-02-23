export const registrationTemplate =
 `section.form
    p.form__title Регистрация
       form.form__form(name="registration")
         | !{emailInput}
         | !{loginInput}
         | !{nameInput}
         | !{secondNameInput}
         | !{phoneInput}
         | !{passwordInput}  
         | !{passwordSubmitInput}          
         button.form__submit-button Зарегистрироваться
       a.form__link(href=linkTo)=formLinkText`;
