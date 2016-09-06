import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';

import {TopMenu, SubMenu, LeftMenu} from './layouts/Main'
import List from './management/userManagement';

require('../scss/index.scss');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="TOP" path="/secure/main" component={TopMenu}>
			<Route path="/list" name="list" component={List} />
		</Route>
	</Router>
	, document.getElementById('root')
);
