type ChatChatProps = {
  events?: {
    submit?: (e: Event) => void,
    click?: (e: Event) => void,
  },
  avatar?: string;
  title?: string;
  last_message?: string;
  chatDate?: string;
  unread_count?: number;
  id: number;
}

export {
  ChatChatProps,
};
