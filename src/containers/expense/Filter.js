import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setDatesToFilter,
  setDescriptionToFilter,
  setSortByDescription,
  setSortByAmount,
  setSortByCreateAt,
} from '../../actions/expensesFilter';

export class Filter extends React.Component {
  state = {
    calendarFocused: null,
    description: '',
  };

  handleCalendarFocused = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  handleDatesChange = ({ startDate, endDate }) => {
    const { datesToFilter } = this.props;
    datesToFilter({ startDate, endDate });
  };

  handleTextChange = (e) => {
    const description = e.target.value;
    const { descriptionToFilter } = this.props;
    descriptionToFilter({ description });
    this.setState(() => ({ description }));
  };

  handleSortByChange = (e) => {
    const sortBy = e.target.value;
    const { sortByCreateAt, sortByAmount, sortByDescription } = this.props;
    if (sortBy === 'createAt') sortByCreateAt();
    if (sortBy === 'amount') sortByAmount();
    if (sortBy === 'description') sortByDescription();
  };

  render() {
    const { calendarFocused, description } = this.state;

    const { filter } = this.props;

    return (
      <div>
        <input
          name="description"
          type="text"
          required
          value={description}
          onChange={this.handleTextChange}
        />

        <select value={filter.sortBy} onChange={this.handleSortByChange}>
          <option value="createAt">Data</option>
          <option value="amount">Valor</option>
          <option value="description">Descrição</option>
        </select>

        <DateRangePicker
          startDate={filter.startDate}
          startDateId="startDateId"
          endDate={filter.endDate}
          endDateId="EndDateId"
          onDatesChange={this.handleDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.handleCalendarFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  datesToFilter: data => dispatch(setDatesToFilter(data)),
  descriptionToFilter: data => dispatch(setDescriptionToFilter(data)),
  sortByCreateAt: () => dispatch(setSortByCreateAt()),
  sortByAmount: () => dispatch(setSortByAmount()),
  sortByDescription: () => dispatch(setSortByDescription()),
});

const mapStateToProps = state => ({
  filter: state.expensesFilter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
