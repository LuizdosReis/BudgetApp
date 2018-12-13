import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import numeral from 'numeral';
import App from './App';
import './firebase/firebase';

import configureStore from './store/configureStore';

import 'purecss/build/pure.css';
// import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';
import Reset from './styles/generic/Reset';
import Base from './styles/Base';
import Colors from './styles/settings/Colors';
import Sizes from './styles/settings/Sizes';

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

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Reset />
      <Base />
      <Colors />
      <Sizes />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root'),
);
