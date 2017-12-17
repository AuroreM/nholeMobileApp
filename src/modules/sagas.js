import { fork, all } from 'redux-saga/effects';

import NavigationSaga from './Navigation';
import { UserSaga } from './User';
import { ClientsSaga } from './Clients';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([fork(UserSaga), fork(NavigationSaga), fork(ClientsSaga)]);
}
