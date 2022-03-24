import EventBus from '../EventBus/EventBus';
import set from '../helpers.set';
import Block from '../Block/Block';
import { State } from './Store.types';
import isEqual from '../helpers.isEqual';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {

  private state: State = {
    userInfo: null,
    chats: [],
    messages: [],
    currentChatId: '',
    token: '',
  };

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>) => (component: typeof Block) => {
  let state: Record<string, unknown>;

  return class extends component<Record<string, unknown>> {
    constructor(props: any) {
      state = mapStateToProps(store.getState());
      super({ ...props, ...state }, {});

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());
          this.setProps({ ...newState });
          state = newState;
      })
    }
  }
};

export default store;
