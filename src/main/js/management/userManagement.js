import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
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
			data: []
		}
	}

	componentDidMount() {
		ajax.getList((data) => {
			this.setState({ data: data });
		})
	}

	render() {

		const userList = this.state.data;
		console.log(JSON.stringify(userList));

		return (

			<BootstrapTable data={userList}
							hover striped condensed pagination deleteRow
							selectRow={{
								mode: 'checkbox',
								bgColor: "F5F5F5"
							}}>
				<TableHeaderColumn dataField="userId" isKey={true}>Product ID</TableHeaderColumn>
				<TableHeaderColumn dataField="username">Product Name</TableHeaderColumn>
				<TableHeaderColumn dataField="phone">Product Price</TableHeaderColumn>
				<TableHeaderColumn dataField="theme">Product Price</TableHeaderColumn>
			</BootstrapTable>

		);
	}
}