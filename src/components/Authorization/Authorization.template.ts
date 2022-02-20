export const authorizationTemplate =
 `p.form__title Вход
    form.form__form(name="authorization")
      label.form__label Логин
        input.form__input(
          type="text"
          name="login"
          placeholder="Логин"
        )
        span.form__input-error Сообщение об ошибке
      label.form__label Логин
        input.form__input(
          type="password"
          name="password"
          placeholder="Пароль"
        )
        span.form__input-error Сообщение об ошибке
      button.form__submit-button Авторизоваться
    a.form__link(href=linkTo)=formLinkText`;
