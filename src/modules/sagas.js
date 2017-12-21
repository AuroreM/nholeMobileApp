import { fork, all } from 'redux-saga/effects';

import NavigationSaga from './Navigation';
import { UserSaga } from './User';
import { ClientsSaga } from './Clients';
import { MessageSaga } from './Message';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([fork(UserSaga), fork(NavigationSaga), fork(ClientsSaga), fork(MessageSaga)]);
}
