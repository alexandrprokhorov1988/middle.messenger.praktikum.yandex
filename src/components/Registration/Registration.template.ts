export const registrationTemplate =
 `section.form
    p.form__title Регистрация
       form.form__form(name="registration")
         label.form__label Почта
           input.form__input(
             type="email"
             name="email"
             placeholder="Email"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Логин
           input.form__input(
             type="text"
             name="login"
             placeholder="Логин"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Имя
           input.form__input(
             type="text"
             name="first_name"
             placeholder="Имя"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Фамилия
           input.form__input(
             type="text"
             name="second_name"
             placeholder="Фамилия"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Телефон
           input.form__input(
             type="text"
             name="phone"
             placeholder="Телефон"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Пароль
           input.form__input(
             type="password"
             name="password"
             placeholder="Пароль"
           )
           span.form__input-error Сообщение об ошибке
         label.form__label Пароль (ещё раз)
           input.form__input(
             type="password"
             name="password-submit"
             placeholder="Повторите пароль"
           )
           span.form__input-error Сообщение об ошибке
         button.form__submit-button Зарегистрироваться
       a.form__link(href=linkTo)=formLinkText`;
