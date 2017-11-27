import { testSaga } from 'redux-saga-test-plan';
import { put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { navigateToSaga } from './sagas';

describe('navigateToSaga', () => {
  it('should redirect to the page', () => {
    testSaga(navigateToSaga, {
      payload: { routeName: 'message' },
      type: 'NAVIGATE_TO',
    })
      .next()
      .put(NavigationActions.navigate({ routeName: 'message' }))
      .next()
      .isDone();
  });
});
