type ChatMessageProps = {
  events?: {
    submit?: (e: Event) => void,
  },
  message?: string;
  time?: string;
  imgSrc?: string;
  isUserMessage?: string;
  isChecked?: string;
}

export {
  ChatMessageProps,
};
