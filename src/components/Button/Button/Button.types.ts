type ButtonProps = {
  events?: {
    click: (e: Event) => void,
  };
  buttonText?: string;
  customClass?: string;
}

export {
  ButtonProps,
};
