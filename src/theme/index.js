// @flow

const gridSize = 8;

const MARGIN_VERTICAL_NORMAL = 15;

export default {
  fontSize: {
    header: 28,
    normal: 20,
    small: 16,
  },
  color: {
    blue: 'rgb(30,144,255)',
    grey: 'rgb(64,64,64)',
    red: 'rgb(220, 20, 60)',
    ligthGrey: '#808080',
  },
  margin: {
    modal: 35,
    vertical: {
      normal: MARGIN_VERTICAL_NORMAL,
      small: 5,
    },
    horizontal: {
      normal: 15,
      small: 5,
    },
  },
  padding: {
    vertical: {
      normal: 10,
    },
  },
  width: {
    halfPage: 150,
    touchable: 200,
  },
  height: {
    touchable: 42,
    bigTextInput: 140,
    header: 60,
  },
  border: {
    radius: 5,
  },
  buttonsContainer: {
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: MARGIN_VERTICAL_NORMAL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dimensions: {
    touchableHeight: 48,
    visibleButtonHeight: 36,
  },
};
