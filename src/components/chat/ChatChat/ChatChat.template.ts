export const chatChatTemplate =
  `li.chat__chat-container(class=isSelected ? 'chat__chat-container_selected': '')
    img.chat__chat-avatar(src=avatarSrc, alt="Аватар")
    p.chat__chat-name=chatName
    p.chat__chat-last-message=chatLastMessage
    p.chat__chat-date=chatDate
    if chatMessageCount
      .chat__chat-message-count=chatMessageCount`;
