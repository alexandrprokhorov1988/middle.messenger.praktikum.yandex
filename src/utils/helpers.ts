function isEqual(lhs: any, rhs: any) {
  return lhs === rhs;
}

function render(query: string, block: any) {
  const root = document.querySelector(query);
  if (root) {
    root.append(block.getContent()!);
    return root;
  }
  return false;
}

export {
  isEqual,
  render,
};
