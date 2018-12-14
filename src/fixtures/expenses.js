import moment from 'moment';

export default [
  {
    id: '0',
    description: 'Gum',
    createAt: 0,
    amount: 3250,
  },
  {
    id: '1',
    description: 'Rent',
    createAt: moment(0)
      .subtract(1, 'day')
      .valueOf(),
    amount: 3250,
  },
  {
    id: '2',
    description: 'Credit car',
    createAt: moment(0)
      .add(1, 'day')
      .valueOf(),
    amount: 3250,
  },
];
