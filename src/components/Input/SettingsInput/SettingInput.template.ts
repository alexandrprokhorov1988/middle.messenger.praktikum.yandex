export const settingInputTemplate =
 `.settings__input-main-container
    .settings__input-container
      label.settings__label #{labelName}
      input.settings__input(
      type=inputType
      name=inputName
      placeholder=inputPlaceholder
      required=required
      value=value
      minlength=minlength
      maxlength=maxlength
      pattern=pattern
      )
    span.settings__input-error #{inputErrorText}`;
