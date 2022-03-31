import { withStore } from '../../utils/Store';
import Authorization from './Authorization';

const withUser = withStore(() => ({ }));

export default withUser(Authorization as any);
