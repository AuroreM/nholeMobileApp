import { fork, all } from 'redux-saga/effects';

import NavigationSaga from './Navigation';
import UserSaga from './User';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([fork(UserSaga), fork(NavigationSaga)]);
}
