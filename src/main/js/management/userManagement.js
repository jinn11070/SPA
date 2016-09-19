import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
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

		const todoList = this.state.data;
		console.log(JSON.stringify(todoList));

		return (
			<div>{todoList.userId}</div>
		);
	}
}