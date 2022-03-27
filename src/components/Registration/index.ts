import { withStore } from '../../utils/Store';
import Registration from './Registration';

const withUser = withStore(() => ({ }));

export default withUser(Registration as any);
