import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import UserNewDialog from '../dialog/UserNewDialog';
import ModalDialog from '../dialog/ModalDialog';
import * as ajax from '../ajax';

export default class UserManagement extends Component {
	render() {
		return (
			<div>
				<Breadcrumbs wrapperElement="ol"
							 itemElement="li"
							 customClass="breadcrumb"
							 separator=""
							 routes={this.props.routes} />
				<div>
					<UserList />
				</div>
			</div>
		);
	}
}

class UserList extends Component {

	constructor() {
		super();

		this.state = {
			userList: [],
			showNewDialog: false,
			showViewDialog: false,
			showEditDialog: false,
			showErrorDialog: false,
			errorMessage: ''
		};
	}
	componentDidMount() {
		ajax.list('/user/list', (data) => {
			this.setState({
				userList: data
			});
		})
	}
	createUser(user) {
		this.setState({showNewDialog: false});
		ajax.create('/user/create', user, (_) => {
			this.reloadData()
		}, (err)=>{
			this.setState({
				errorMessage: err,
				showErrorDialog: true
			})
		})
	}
	render() {

		const userList = this.state.userList;
		console.log(JSON.stringify(userList));

		return (
			<div>
				<Button onClick={()=>this.setState({showNewDialog:true})}>New</Button>
				<BootstrapTable data={userList}
								hover striped condensed pagination
								selectRow={{
									mode: 'checkbox',
									bgColor: "F5F5F5"
								}}>
					<TableHeaderColumn dataField="username" isKey={true}>ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name">Name</TableHeaderColumn>
					<TableHeaderColumn dataField="phone">Phone</TableHeaderColumn>
					<TableHeaderColumn dataField="theme">Theme</TableHeaderColumn>
				</BootstrapTable>
				<UserNewDialog show={this.state.showNewDialog}
							   close={()=>this.setState({showNewDialog:false})}
							   submitButtonAction={this.createUser.bind(this)}/>
			</div>

		);
	}
}