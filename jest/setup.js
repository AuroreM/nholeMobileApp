jest.mock('AsyncStorage', () => ({
  ...require.requireActual('AsyncStorage'),
  getItem: key => Promise.resolve('{}'),
  setItem: (key, value) => Promise.resolve(),
  removeItem: key => Promise.resolve(),
}));

jest.mock('redux-enhancer-react-native-appstate', () => ({
  FOREGROUND: () => {},
}));
