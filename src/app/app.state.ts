import { ProductState } from './products/state/product.reducer';
import { UserState } from './user/state/user.reducer';

export interface State {
    users: UserState;
}
