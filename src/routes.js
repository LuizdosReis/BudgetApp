import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Menu from './components/Menu';
import Header from './components/Header';
import { Content, Layout } from './styles';
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
    <Layout>
      <Header />
      <Menu />
      <Content>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/app" component={DashboardPage} />
          <Route path="/categories" component={CategoryContainer} exact />
          <Route path="/categories/new" component={CategoryForm} exact />
          <Route path="/categories/edit/:id?" component={CategoryForm} />
          <Route path="/expenses" component={ExpensesList} exact />
          <Route path="/expenses/new" component={AddExpense} exact />
          <Route path="/expenses/edit/:id?" component={EditExpense} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
    </Layout>
  </BrowserRouter>
);

export default AppRoutes;
