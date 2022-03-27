import { withStore } from '../../../utils/Store';
import SettingPassword from './SettingsPassword';

const withUser = withStore((state: any) => ({...state}));

export default withUser(SettingPassword as any);
