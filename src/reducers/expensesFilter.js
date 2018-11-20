import moment from 'moment';

const filterReducerDefaultState = {
  description: '',
  sortBy: 'id',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DESCRIPTION_FILTER':
      return {
        ...state,
        description: action.description,
      };
    case 'FILTER_BY_DATES':
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    case 'SORT_BY_DESCRIPTION':
      return {
        ...state,
        sortBy: 'description',
      };
    case 'SORT_BY_ID':
      return {
        ...state,
        sortBy: 'id',
      };
    case 'SORT_BY_CREATEAT':
      return {
        ...state,
        sortBy: 'createAt',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    default:
      return state;
  }
};
