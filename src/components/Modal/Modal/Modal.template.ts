export const modalTemplate =
  `.modal(data-modal-name=modalName)
     .modal__form-container
       p.modal__form-title #{modalFormTitle}
       form.modal__form(name="addUser")
         | !{modalFormContent}
         button.modal__form-submit-button #{modalFormSubmitText}`;
