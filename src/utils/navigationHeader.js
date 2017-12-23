import theme from 'nholeMobileApp/src/theme';

export default (title: string, headerLeft: ?boolean = null) => {
  const navigationOptions = {
    title,
    headerStyle: {
      backgroundColor: theme.color.gray,
      height: 60,
    },
    headerTitleStyle: {
      fontSize: theme.fontSize.header,
      fontWeight: '200',
      color: theme.color.blue,
    },
  };

  if (!headerLeft) navigationOptions.headerLeft = null;

  return navigationOptions;
};
