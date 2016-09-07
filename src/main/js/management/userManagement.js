import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

//import BookList from './BookList.js'

export default class UserManagement extends Component {
	render() {
		return (
			<div>
				<Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<div style={{paddingLeft: '1em', paddingRight: '1em'}}>
								정수진
								김현주
								길기범
								정일균
								장한을
								이원규
								임돌핀님
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
