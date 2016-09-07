import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import {TopMenu, LeftMenu} from './layouts/Main'
import UserManagement from './management/userManagement';
import GroupManagement from './management/groupManagement';

require('../scss/index.scss');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="Main" path="/bass" component={TopMenu}>

			<IndexRedirect to="/bass/management" />

			<Route path="/bass/management" name="management" component={LeftMenu}>
				<IndexRedirect to="/bass/userManagement" />
				<Route path="/bass/userManagement" name="userManagement" component={UserManagement} />
				<Route path="/bass/groupManagement" name="groupManagement" component={GroupManagement} />
			</Route>
		</Route>
	</Router>
	, document.getElementById('root')
);
