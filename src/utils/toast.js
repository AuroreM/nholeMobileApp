import Toast from 'react-native-toast-native';

const style = {
  height: 70,
  width: 350,
  borderRadius: 10,
};

export default message => Toast.show(message, Toast.LONG, Toast.BOTTOM, style);
