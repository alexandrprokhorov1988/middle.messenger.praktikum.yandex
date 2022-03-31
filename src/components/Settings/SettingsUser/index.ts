import { withStore } from '../../../utils/Store';
import SettingUser from './SettingsUser';

const withUser = withStore((state: any) => ({...state}));

export default withUser(SettingUser as any);
