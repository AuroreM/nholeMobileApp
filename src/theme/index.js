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
  grid: {
    x1: gridSize * 1,
    x2: gridSize * 2,
    x3: gridSize * 3,
    x4: gridSize * 4,
    x5: gridSize * 5,
    x6: gridSize * 6,
    x8: gridSize * 8,
    x9: gridSize * 9,
    x10: gridSize * 10,
    x12: gridSize * 12,
    x14: gridSize * 14,
    x16: gridSize * 16,
  },
  dimensions: {
    touchableHeight: 48,
    visibleButtonHeight: 36,
  },
};
