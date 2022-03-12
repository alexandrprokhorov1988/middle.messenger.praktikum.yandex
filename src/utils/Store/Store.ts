import EventBus from '../EventBus/EventBus';
import set from '../helpers.set';

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

export default new Store();
