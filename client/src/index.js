import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory, Switch} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/es/integration/react';

import 'normalize.css';

import {store, history, persistor } from './store';
import ActionsPage from './components/ActionsPage/ActionsPage';
import LoginForm from './components/LoginForm/LoginForm';
import NewDayList from './components/NewDayPage/NewDayList';
import AdminActions from './components/AdminActions/AdminActions';
import Reports from './components/Reports/Reports';
import Layout from './components/Layout/Layout';
import Home from './components/HomePage/Home';
import SignUpPage from "./components/SignUpPage/SignUpPage";
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store ={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            {/*<Route exact path="/" component={Layout}/>*/}
            <Route exact path="/" component={Home}/>
            <Route exact path="/auth/login" component={Layout}/>
            <Route exact path="/auth/signup" component={SignUpPage}/>
            <Route exact path="/actions" component={ActionsPage} />
            <Route path="/actions/newday" component={NewDayList} />
            <Route path="/actions/reports" component={Reports} />
            <Route path="/actions/admin" component={AdminActions} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  </PersistGate>, document.getElementById('root'));
