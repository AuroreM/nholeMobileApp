// @flow
import { takeLatest, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import type { ActionType } from './actions';

export function* navigateToSaga(action: ActionType): Generator<*, *, *> {
  yield put(NavigationActions.navigate({ routeName: action.payload.routeName }));
}

export function* NavigationSaga(): Generator<*, *, *> {
  yield takeLatest('NAVIGATE_TO', navigateToSaga);
}

export default NavigationSaga;
