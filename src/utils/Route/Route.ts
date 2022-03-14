import Block from '../Block/Block';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

export default class Route {
  private _pathname: string;
  private _blockClass: any;
  private _block: Block<Record<string, unknown>> | null;
  private _props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (!this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.getContent()?.remove();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    const root = document.querySelector(this._props.rootQuery);
    if (!root) {
      throw new Error('Root element not found');
    }
    root.innerHTML = '';
    root.append(this._block!.getContent());
  }
}
