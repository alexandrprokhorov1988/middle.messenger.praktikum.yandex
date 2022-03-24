export const chatMessageTemplate =
 `if customClass
    li.chat__message-container(class=customClass)
      p.chat__message.chat__message_type-nomessage=content
else  
  li.chat__message-container(class=isUserMessage ? 'chat__message-container_current-user': '')
    p.chat__message(class=is_read ? 'chat__message_checked': '')=content
    p.chat__message-time(class=isChecked ? 'chat__message-time_checked': '')=time
    if imgSrc
      img.chat__message-img(src=imgSrc, alt="Аватар")`;
