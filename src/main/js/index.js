import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
//import { createHashHistory } from 'history';

import {TopMenu, LeftMenu} from './layouts/Main'
import QueryEditor from './dataAnalysis/QueryEditor';
import Dashboard from './dataAnalysis/Dashboard';
import UserManagement from './management/UserManagement';
import GroupManagement from './management/GroupManagement';

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

require('../scss/index.scss');

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route name="Main" path="/" component={TopMenu}>
			<IndexRedirect to="management" />

			<Route path="management" name="Management" component={LeftMenu}>
				<IndexRedirect to="userManagement" />
				<Route path="userManagement" name="User Management" component={UserManagement} />
				<Route path="groupManagement" name="Group Management" component={GroupManagement} />
			</Route>

			<Route path="dataAnalysis" name="Data Analysis" component={LeftMenu}>
				<IndexRedirect to="queryEditor" />
				<Route path="queryEditor" name="Query Editor" component={QueryEditor} />
				<Route path="dashboard" name="Dashboard" component={Dashboard} />
			</Route>
		</Route>
	</Router>
	, document.getElementById('root')
);
