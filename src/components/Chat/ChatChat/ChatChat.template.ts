export const chatChatTemplate = `li.chat__chat-container(class=isSelected ? 'chat__chat-container_selected': '' data-id=id)
    img.chat__chat-avatar(src=avatar, alt="Аватар")
    p.chat__chat-name=title
    p.chat__chat-last-message=last_message
    p.chat__chat-date=chatDate || ''
    if chatMessageCount
      .chat__chat-message-count=unread_count`;
