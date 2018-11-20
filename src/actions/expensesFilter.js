export const setDatesToFilter = ({ startDate, endDate }) => ({
  type: 'FILTER_BY_DATES',
  startDate,
  endDate,
});

export const setDescriptionToFilter = ({ description }) => ({
  type: 'SET_DESCRIPTION_FILTER',
  description,
});

export const setSortByDescription = () => ({
  type: 'SORT_BY_DESCRIPTION',
});

export const setSortByCreateAt = () => ({
  type: 'SORT_BY_CREATEAT',
});

export const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
