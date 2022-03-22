export const settingsTemplate = `section.settings
  .settings__avatar-container
    img.settings__avatar.settings__avatar_type_main(src=userInfo.avatar ? userInfo.avatar : 'https://i.gifer.com/Q2RE.gif', alt="Аватар")
  p.settings__user-name=(userInfo.login ? userInfo.login : '')
    form.settings__form-container(name="settings-user-info")
      .settings__input-container
        label.settings__label Почта
        input.settings__input(
        type="email"
        name="email"
        placeholder="Email"
        value=userInfo.email
        disabled=disabledUserInfoForm
        )
      .settings__input-container
        label.settings__label Логин
        input.settings__input(
        type="text"
        name="login"
        placeholder="Логин"
        value=userInfo.login
        disabled=disabledUserInfoForm
        )
      .settings__input-container
        label.settings__label Имя
        input.settings__input(
        type="text"
        name="first_name"
        placeholder="Имя"
        value=userInfo.first_name
        disabled=disabledUserInfoForm
        )
      .settings__input-container
        label.settings__label Фамилия
        input.settings__input(
        type="text"
        name="second_name"
        placeholder="Фамилия"
        value=userInfo.second_name
        disabled=disabledUserInfoForm
        )
      .settings__input-container
         label.settings__label Имя в чате
         input.settings__input(
         type="text"
         name="display_name"
         placeholder="Имя в чате"
         value=userInfo.display_name
         disabled=disabledUserInfoForm
         )        
      .settings__input-container
        label.settings__label Телефон
        input.settings__input(
        type="text"
        name="phone"
        placeholder="Телефон"
        value=userInfo.phone
        disabled=disabledUserInfoForm
        )
    .settings__button-container
      .settings__button-border-container
        | !{buttonChangeInfo}
      .settings__button-border-container
        | !{buttonChangePassword}
      .settings__button-border-container
        | !{buttonLogout}      
    | !{linkButton}`;
