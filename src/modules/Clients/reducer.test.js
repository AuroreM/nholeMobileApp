import { removeClientById } from './reducer';

describe('removeClientById', () => {
  const clients = [
    {
      firstname: 'Aurore',
      lastname: 'Ma',
      number: '0707070707',
      morning: true,
      afternoon: true,
      lunch: false,
      evening: false,
      id: 1,
      userId: 1,
    },
    {
      firstname: 'Christine',
      lastname: 'Ma',
      number: '0606060606',
      morning: false,
      afternoon: false,
      lunch: false,
      evening: true,
      id: 2,
      userId: 1,
    },
  ];
  it('should return the list without the client 1', () => {
    expect(removeClientById(clients, 1)).toEqual([
      {
        firstname: 'Christine',
        lastname: 'Ma',
        number: '0606060606',
        morning: false,
        afternoon: false,
        lunch: false,
        evening: true,
        id: 2,
        userId: 1,
      },
    ]);
  });

  it('should return the same list as client 3 is not in it', () => {
    expect(removeClientById(clients, 3)).toEqual(clients);
  });
});
