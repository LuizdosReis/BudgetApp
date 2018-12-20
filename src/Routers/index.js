import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import { Content, Layout } from './styles';
import CategoryContainer from '../containers/CategoryConteiner';
import DashboardPageExpenses from '../containers/expense/DashboardPage';
import AddExpense from '../containers/expense/Add';
import EditExpense from '../containers/expense/Edit';
import DashboardPage from '../containers/DashbordPage';
import NotFoundPage from '../containers/NotFoundPage';
import CategoryForm from '../containers/CategoryForm';
import SignIn from '../components/SingIn';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRoutes = () => (
  <Router history={history}>
    <Layout>
      <Content>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute path="/app" component={DashboardPage} />
          <PrivateRoute path="/categories" component={CategoryContainer} exact />
          <PrivateRoute path="/categories/new" component={CategoryForm} exact />
          <PrivateRoute path="/categories/edit/:id?" component={CategoryForm} />
          <PrivateRoute path="/expenses" component={DashboardPageExpenses} exact />
          <PrivateRoute path="/expenses/new" component={AddExpense} exact />
          <PrivateRoute path="/expenses/edit/:id?" component={EditExpense} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
    </Layout>
  </Router>
);

export default AppRoutes;
