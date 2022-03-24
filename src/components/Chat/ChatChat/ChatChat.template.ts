export const chatChatTemplate = `li.chat__chat-container(class=isSelected ? 'chat__chat-container_selected': '' data-id=id)
    if avatar
      img.chat__chat-avatar(src=avatar, alt="Аватар")
    else  
      div.chat__chat-avatar 
    p.chat__chat-name=title
    p.chat__chat-last-message=last_message
    p.chat__chat-date=chatDate || ''
    if unread_count
      .chat__chat-message-count=unread_count`;
