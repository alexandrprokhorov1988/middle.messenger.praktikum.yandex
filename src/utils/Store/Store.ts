import EventBus from '../EventBus/EventBus';
import set from '../helpers.set';
import Block from '../Block/Block';
import isEqual from '../helpers.isEqual';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Record<string, unknown> = {
    userInfo: null,
    chats: [],
  };

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  };

  public getState() {
    return this.state;
  }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>) => (component: typeof Block) => {
  let state: Record<string, unknown>;

  return class extends component<Record<string, unknown>> {
    constructor(props) {
      state = mapStateToProps(store.getState());
      super('div', { ...props, ...state });

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(state, newState))
          this.setProps({ ...newState })
      })
    }
  }
};

export default store;
