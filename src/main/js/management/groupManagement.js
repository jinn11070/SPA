import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class GroupManagement extends Component {
	render() {
		return (
			<div>
				<Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
				<div>
					GroupManagement
				</div>
			</div>
		);
	}
}
