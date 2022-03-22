export const inputTemplate = `label.form__label #{labelName}
    input.form__input(
      type=inputType
      name=inputName
      placeholder=inputPlaceholder
      required=required
      value=inputValue
      minlength=minlength
      maxlength=maxlength
      pattern=pattern
      enctype=enctype || ''
    )
    span.form__input-error #{inputErrorText}`;
