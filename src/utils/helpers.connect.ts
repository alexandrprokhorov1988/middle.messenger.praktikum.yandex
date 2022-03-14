import Block from './Block/Block';
import { store, StoreEvents } from './Store';

export default function connect<TProps extends Record<string, unknown>>(Component: typeof Block) {
  return class extends Component<TProps> {
    constructor(...args: any) {
      super(...args);

      console.log(...args);

      store.on(StoreEvents.Updated, () => {
        this.setProps({...store.getState()});
      });
      console.log(store.getState());
    }
  }
}
