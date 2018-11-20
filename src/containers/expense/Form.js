import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      // category: props.expense ? props.expense.category : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      descriptionError: '',
      // categoryError: '',
      amountError: '',
      calendarFocused: false,
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState(() => ({ [name]: value }));
  };

  handleDateChange = (createAt) => {
    this.setState(() => ({ createAt }));
  };

  handleCalendarFocused = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.valid()) return;

    const {
      description, category, amount, createAt,
    } = this.state;

    const { onSubmit } = this.props;

    onSubmit({
      description,
      // category,
      amount: amount * 100,
      createAt: createAt.valueOf(),
    });

    this.setState(() => ({
      description: '',
      // category: '',
      amount: '',
      createAt: moment(),
    }));
  };

  valid = () => {
    const { description, category, amount } = this.state;

    const descriptionError = !description ? 'adicione uma descrição' : '';

    // const categoryError = !category ? 'adicione uma categoria' : '';

    const amountError = !amount ? 'adicione um valor' : '';

    this.setState(() => ({
      descriptionError,
      // categoryError,
      amountError,
    }));

    return !!descriptionError;
    // || !!categoryError;
  };

  render() {
    const {
      createAt,
      calendarFocused,
      description,
      descriptionError,
      amount,
      amountError,
      // category,
      // categoryError,
      // categories,
    } = this.state;

    return (
      <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="date">Data</label>
            <SingleDatePicker
              date={createAt}
              onDateChange={this.handleDateChange}
              focused={calendarFocused}
              onFocusChange={this.handleCalendarFocused}
              id="date"
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="description">Descrição</label>
            <input
              name="description"
              type="text"
              required
              value={description}
              onChange={this.handleInputChange}
            />
            {descriptionError && (
              <span className="pure-form-message-inline add-category-error">
                {descriptionError}
              </span>
            )}
          </div>
          <div className="pure-control-group">
            <label htmlFor="amount">Valor</label>
            <input
              name="amount"
              type="number"
              value={amount}
              onChange={this.handleInputChange}
              required
              min="0"
              step="0.01"
            />
            {amountError && (
              <span className="pure-form-message-inline add-category-error">{amountError}</span>
            )}
          </div>
          {/* <div className="pure-control-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={this.handleInputChange}
            >
              <option value="">Selecione</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {c.description}
                </option>
              ))}

              <option value="IN">Entrada</option>
            </select>
            {categoryError && (
              <span className="pure-form-message-inline add-category-error">{categoryError}</span>
            )}
            </div> */}
          <div className="pure-controls">
            <button type="submit" className="pure-button button-success">
              Salvar
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   categories: state.categories,
// });

// export default connect(mapStateToProps)(Form);
