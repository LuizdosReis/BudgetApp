import moment from 'moment';

export default (expenses, {
  startDate, endDate, description, sortBy,
}) => expenses
  .filter((expense) => {
    const createAtMoment = moment(expense.createAt);
    const startDateMatch = startDate ? createAtMoment.isSameOrAfter(startDate, 'day') : true;
    const endDateMatch = endDate ? createAtMoment.isSameOrBefore(endDate, 'day') : true;
    const descriptionMatch = description
      ? expense.description.toLowerCase().includes(description.toLowerCase())
      : true;
    return startDateMatch && endDateMatch && descriptionMatch;
  })
  .sort((a, b) => {
    if (sortBy === 'description') {
      return a.description < b.description ? -1 : 1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? -1 : 1;
    }
    return a.createAt < b.createAt ? -1 : 1;
  });
