export const settingsUserTemplate =
  `section.settings
    .settings__avatar-container
      img.settings__avatar(src=userInfo.avatar || 'https://i.gifer.com/Q2RE.gif', alt="Аватар")
      | !{addAvatarButton}
    p.settings__user-name=userInfo.login
    form.settings__form-container.settings__form-container_padding-up(name="user-edit")
      | !{emailInput} 
      | !{loginInput} 
      | !{nameInput} 
      | !{secondNameInput} 
      | !{nameInChatInput} 
      | !{phoneInput} 
      .settings__button-container.settings__button-container_type-save
        button.settings__button.settings__button_type-save Сохранить
    | !{linkButton}
    | !{addAvatarModal}`;
