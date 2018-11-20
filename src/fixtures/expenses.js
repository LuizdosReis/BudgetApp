import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Gum',
    category: 'Life',
    createAt: 0,
    amount: 32.5,
  },
  {
    id: 2,
    description: 'Rent',
    category: 'Home',
    createAt: moment(0)
      .subtract(1, 'day')
      .valueOf(),
    amount: 32.5,
  },
  {
    id: 3,
    description: 'Credit car',
    category: 'Bank',
    createAt: moment(0)
      .add(1, 'day')
      .valueOf(),
    amount: 32.5,
  },
];
