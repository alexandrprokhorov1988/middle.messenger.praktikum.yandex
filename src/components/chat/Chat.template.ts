export const chatTemplate =
  `section.chat
    .chat__container
      .chat__left-container
        .chat__profile
          a.chat__profile-link(href=profileLinkTo)=profileLinkText
           span.chat__profile-link-img
        .chat__search
          input.chat__input.chat__input_type-search(
            type="text"
            placeholder="Поиск"
          )
        ul.chat__chats-list
         | !{chatChat}
         | !{chatChat2}
         | !{chatChat3}
         | !{chatChat4}
         | !{chatChat5}
      .chat__right-container
        .chat__settings
          .chat__settings-user-info-container
            img.chat__settings-avatar(src=avatarSrc, alt="Аватар")
            p.chat__settings-user-name=userInfo.first_name
          button.chat__settings-button
          .chat__settings-modal.chat__settings-modal_type-user.chat__settings-modal_show
            .chat__settings-modal-container
              button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-add
              p.chat__settings-modal-text Добавить пользователя
            .chat__settings-modal-container
              button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-remove
              p.chat__settings-modal-text Удалить пользователя
        ul.chat__messages
          | !{chatMessage}
          | !{chatMessage2}
          | !{chatMessage3}
          | !{chatMessage4}
          | !{chatMessage5}
        .chat__message-input-container
          button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-select
          | !{chatMessageForm}
          .chat__settings-modal.chat__settings-modal_type-message.chat__settings-modal_show
            .chat__settings-modal-container
              button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-foto
              p.chat__settings-modal-text Фото или Видео
            .chat__settings-modal-container
              button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-file
              p.chat__settings-modal-text Файл
            .chat__settings-modal-container
              button.chat__settings-button.chat__settings-button_type-modal.chat__settings-button_type-geo
              p.chat__settings-modal-text Локация`;
