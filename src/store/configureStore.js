import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from '../reducers/categories';
import filterReducer from '../reducers/filter';
import expenseReducer from '../reducers/expenses';
import expensesFilterReducer from '../reducers/expensesFilter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      filters: filterReducer,
      expenses: expenseReducer,
      expensesFilter: expensesFilterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
