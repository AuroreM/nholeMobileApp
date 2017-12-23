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
    gray: 'rgb(64,64,64)',
    red: 'rgb(220, 20, 60)',
  },
  margin: {
    vertical: {
      normal: MARGIN_VERTICAL_NORMAL,
      small: 5,
    },
    horizontal: {
      normal: 15,
    },
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
