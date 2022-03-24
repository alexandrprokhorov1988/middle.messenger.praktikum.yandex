import Block from '../Block/Block';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

export default class Route {
  private _pathname: string;
  private readonly _blockClass: any;
  private _block: Block<Record<string, unknown>> | null;
  private _props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (!this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.getContent()?.remove();
    }
  }

  public match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  public render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    const root = document.querySelector(this._props.rootQuery);
    if (!root) {
      throw new Error('Root element not found');
    }
    this._block!.dispatchComponentDidMount();

    root.innerHTML = '';
    root.append(this._block!.getContent());
  }
}
