export const chatMessageTemplate = `li.chat__message-container(class=isUserMessage ? 'chat__message-container_current-user': '')
    p.chat__message(class=isChecked ? 'chat__message_checked': '')=message
    p.chat__message-time(class=isChecked ? 'chat__message-time_checked': '')=time
    if imgSrc
      img.chat__message-img(src=imgSrc, alt="Аватар")`;