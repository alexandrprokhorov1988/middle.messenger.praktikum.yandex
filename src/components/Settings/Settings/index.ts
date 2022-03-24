import { withStore } from '../../../utils/Store';
import Settings from './Settings';

const withUser = withStore((state: any) => ({...state}));

export default withUser(Settings);

