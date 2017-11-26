// @flow

export const sendMessage = (message: string, slot: string): ActionType => {
  return {
    type: 'SEND_MESSAGE',
    payload: {
      message,
      slot,
    },
  };
};

type ActionType = {| type: 'SEND_MESSAGE', payload: {| message: string, slot: string |} |};
