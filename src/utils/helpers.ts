function render(query: string, block: any) {
  const root = document.querySelector(query);
  block.dispatchComponentDidMount();

  if (root) {
    root.innerHTML = '';
    root.append(block.getContent()!);
    return root;
  }
  return false;
}

export {
  render,
};
