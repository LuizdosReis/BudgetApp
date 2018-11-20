import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Menu from './pages/Menu';
import CategoryContainer from './containers/CategoryConteiner';
import ExpensesList from './containers/expense/List';
import AddExpense from './containers/expense/Add';
import EditExpense from './containers/expense/Edit';
import DashboardPage from './containers/DashbordPage';
import NotFoundPage from './containers/NotFoundPage';
import CategoryForm from './containers/CategoryForm';
import SignUp from './pages/SingUp';
import SignIn from './pages/SingIn';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <div>
        <Menu />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/app" component={DashboardPage} />
        <PrivateRoute path="/categories" component={CategoryContainer} exact />
        <PrivateRoute path="/categories/new" component={CategoryForm} exact />
        <PrivateRoute path="/categories/edit/:id?" component={CategoryForm} />
        <PrivateRoute path="/expenses" component={ExpensesList} exact />
        <PrivateRoute path="/expenses/new" component={AddExpense} exact />
        <PrivateRoute path="/expenses/edit/:id?" component={EditExpense} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
