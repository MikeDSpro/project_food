import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory, Switch} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import 'normalize.css';
import reducer from './reducers';
import FormLoginContainer from './containers/FormLoginContainer';
import {store, history} from './store';
import ActionsPage from './components/ActionsPage/ActionsPage';
import LoginForm from './components/LoginForm/LoginForm';
import NewDayList from './components/NewDayPage/NewDayList';
import AdminActions from './components/AdminActions/AdminActions';
import Reports from './components/Reports/Reports';

// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store ={store}>
    <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm}/>
        
          <Route exact path="/actions" component={ActionsPage} />
          <Route path="/actions/newday" component={NewDayList} />
          <Route path="/actions/reports" component={Reports} />
          <Route path="/actions/admin" component={AdminActions} />
     
      </Switch>
      </div>
    </ConnectedRouter >
  </Provider>,document.getElementById('root'));
