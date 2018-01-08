// @flow
import { AsyncStorage } from 'react-native';

export default class AuthenticationTokenManager {
  static get(): Promise<?String> {
    return AsyncStorage.getItem('jwtToken').catch(error => {
      console.warn('Error getting JWT token', error);
      return null;
    });
  }

  static set(token: string): Promise<void> {
    return AsyncStorage.setItem('jwtToken', token).catch(e => console.warn('Error setting JWT token', e));
  }

  static clear(): Promise<void> {
    return AsyncStorage.clear();
  }
}
