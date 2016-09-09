import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class QueryEditor extends Component {
	render() {
		return (
			<div>
				<Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
				<div style={{paddingLeft: '1em'}}>
					QueryEditor.
				</div>
			</div>
		);
	}
}
