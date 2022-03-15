export const chatTemplate =
  `section.chat
    .chat__container
      .chat__left-container
        .chat__profile
          | !{linkButton}
        .chat__search
          input.chat__input.chat__input_type-search(
            type="text"
            placeholder="Поиск"
          )
        ul.chat__chats-list
         | !{chats}
      .chat__right-container
        .chat__settings
          .chat__settings-user-info-container
            img.chat__settings-avatar(src=avatar, alt="Аватар")
            p.chat__settings-user-name=userInfo.first_name            
          | !{userButton}          
          if isOpenUserModal
            .chat__settings-modal.chat__settings-modal_type-user.chat__settings-modal_show
              .chat__settings-modal-container              
                | !{addUserButton}                 
                p.chat__settings-modal-text Добавить пользователя
              .chat__settings-modal-container
                | !{removeUserButton}
                p.chat__settings-modal-text Удалить пользователя              
        ul.chat__messages
          | !{chatMessage}
        .chat__message-input-container        
          | !{fileButton}  
          | !{chatMessageForm}
          if isOpenFileModal
            .chat__settings-modal.chat__settings-modal_type-message.chat__settings-modal_show
              .chat__settings-modal-container
                | !{addFotoButton}              
                p.chat__settings-modal-text Фото или Видео
              .chat__settings-modal-container
                | !{addFileButton}              
                p.chat__settings-modal-text Файл
              .chat__settings-modal-container
                | !{addGeoButton}              
                p.chat__settings-modal-text Локация
    | !{addUserModal}
    | !{removeUserModal}
    | !{addGeoModal}
    | !{addFileModal}
    | !{addFotoModal}`;
