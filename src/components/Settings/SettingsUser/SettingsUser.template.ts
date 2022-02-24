export const settingsUserTemplate =
  `form.settings__form-container.settings__form-container_padding-up(name="password-edit")
     | !{emailInput} 
     | !{loginInput} 
     | !{nameInput} 
     | !{secondNameInput} 
     | !{nameInChatInput} 
     | !{phoneInput} 
     .settings__button-container.settings__button-container_type-save
       button.settings__button.settings__button_type-save Сохранить
     a.settings__link(href=linkTo)
       .settings__link-img`;
