import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import "babel-polyfill";
//import { Router, Route, IndexRoute, IndexRedirect, browserHistory, useRouterHistory } from 'react-router';
//import { createHistory, useBasename } from 'history'

//const bassHistory = useRouterHistory(useBasename(createHistory))({
//	basename: "/"
//});


import { TopMenu, LeftMenu } from './layouts/Main'
import QueryEditor from './dataAnalysis/queryEditor';
import Dashboard from './dataAnalysis/dashboard';
import UserManagement from './management/userManagement';
import GroupManagement from './management/groupManagement';

require('../scss/index.scss');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="Main" path="/bass" component={TopMenu}>
            <IndexRoute to="management" />
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
