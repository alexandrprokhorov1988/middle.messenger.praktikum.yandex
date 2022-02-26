type ChatChatProps = {
  events?: {
    submit?: (e: Event) => void,
    click?: () => void,
  },
  avatarSrc?: string;
  chatName?: string;
  chatLastMessage?: string;
  chatDate?: string;
  chatMessageCount?: string;
}

export {
  ChatChatProps,
};
