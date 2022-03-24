const PASSWORD_REGEXP = '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})';
const EMAIL_REGEXP = '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}';
const LOGIN_REGEXP = '[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*';
const NAME_REGEXP = '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$';
const SECOND_NAME_REGEXP = '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$';
const PHONE_REGEXP = '^\\+?[0-9]{10,15}$';
const ALREADY_SELECTED_CHAT_ERR = 'чат тот же, не нажимайте больше';

export {
  PASSWORD_REGEXP,
  EMAIL_REGEXP,
  LOGIN_REGEXP,
  NAME_REGEXP,
  SECOND_NAME_REGEXP,
  PHONE_REGEXP,
  ALREADY_SELECTED_CHAT_ERR,
};

