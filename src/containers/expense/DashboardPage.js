import React, { Fragment } from 'react';
import ListExpenses from './List';
import FilterExpenses from './Filter';
import SummaryExpenses from './Summary';

const DashboardPage = () => (
  <Fragment>
    <FilterExpenses />
    <ListExpenses />
    <SummaryExpenses />
  </Fragment>
);

export default DashboardPage;
