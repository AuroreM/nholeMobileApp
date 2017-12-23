export default (title, headerLeft = null) => {
  const navigationOptions = {
    title,
    headerStyle: {
      backgroundColor: 'rgb(64,64,64)',
      height: 60,
    },
    headerTitleStyle: {
      fontSize: 28,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '200',
      color: 'rgb(30,144,255)',
    },
  };

  if (!headerLeft) navigationOptions.headerLeft = null;

  return navigationOptions;
};
