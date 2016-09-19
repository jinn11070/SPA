import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, useRouterHistory } from 'react-router';
//import { createHashHistory } from 'history';

import {TopMenu, LeftMenu} from './layouts/Main'
import QueryEditor from './dataAnalysis/queryEditor';
import Dashboard from './dataAnalysis/dashboard';
import UserManagement from './management/userManagement';
import GroupManagement from './management/groupManagement';

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

require('../scss/index.scss');

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route name="Main" path="/" component={TopMenu}>
			<IndexRedirect to="management"/>

			<Route path="management" name="Management" component={LeftMenu}>
				<IndexRoute component = {UserManagement} />
				<Route path="userManagement" name="User Management" component={UserManagement} />
				<Route path="groupManagement" name="Group Management" component={GroupManagement} />
			</Route>

			<Route path="dataAnalysis" name="Data Analysis" component={LeftMenu}>
				<IndexRoute component = {QueryEditor} />
				<Route path="queryEditor" name="Query Editor" component={QueryEditor} />
				<Route path="dashboard" name="Dashboard" component={Dashboard} />
			</Route>
		</Route>
	</Router>
	, document.getElementById('root')
);
