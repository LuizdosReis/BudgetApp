import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import moment from 'moment';
import numeral from 'numeral';
import App from './App';

import configureStore from './store/configureStore';
import { addCategory } from './actions/categories';
import { add } from './actions/expenses';

import 'normalize.css/normalize.css';
import 'purecss/build/pure.css';
import './styles/side-menu.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

numeral.register('locale', 'pt-BR', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'c',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal() {
    return '.°';
  },
  currency: {
    symbol: 'R$',
  },
});

numeral.locale('pt-BR');

store.dispatch(addCategory({ description: 'Car', type: 'OUT' }));
store.dispatch(addCategory({ description: 'Motorcycle', type: 'OUT' }));
store.dispatch(addCategory({ description: 'Salary', type: 'IN' }));
store.dispatch(
  add({
    description: 'Gas',
    category: 'Car',
    createAt: moment(),
    amount: 1000.234,
  }),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
