export const settingsPasswordTemplate =
  `section.settings
    .settings__avatar-container
      img.settings__avatar.settings__avatar_type_main(src=userInfo.avatar || 'https://i.gifer.com/Q2RE.gif', alt="Аватар")
    p.settings__user-name=userInfo.login
    form.settings__form-container.settings__form-container_padding-up(name="password-edit")
      | !{oldPasswordInput} 
      | !{newPasswordInput} 
      | !{confirmPasswordInput} 
      .settings__button-container.settings__button-container_type-save
        button.settings__button.settings__button_type-save Сохранить
    | !{linkButton}`;
