type ChatMessageProps = {
  events?: {
    submit?: (e: Event) => void,
  },
  content?: string;
  time?: string;
  imgSrc?: string;
  isUserMessage?: boolean;
  is_read?: string;
  id?: string;
  customClass?: string;
}

export {
  ChatMessageProps,
};
