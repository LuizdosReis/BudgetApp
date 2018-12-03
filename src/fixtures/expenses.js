import moment from 'moment';
import numeral from 'numeral';

export default [
  {
    id: 1,
    description: 'Gum',
    category: 'Life',
    createAt: 0,
    amount: 3250,
  },
  {
    id: 2,
    description: 'Rent',
    category: 'Home',
    createAt: moment(0)
      .subtract(1, 'day')
      .valueOf(),
    amount: 3250,
  },
  {
    id: 3,
    description: 'Credit car',
    category: 'Bank',
    createAt: moment(0)
      .add(1, 'day')
      .valueOf(),
    amount: 3250,
  },
];
