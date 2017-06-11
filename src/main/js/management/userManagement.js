import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

//import BookList from './BookList.js'

export default class UserManagement extends Component {

	componentWillMount() {
		this.serverRequest = $.get('/bass/list', function (result) {

			console.log(result)
			/*var lastGist = result[0];
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});*/
		}.bind(this));
	}

	render() {
		return (
			<div>
				<Breadcrumbs wrapperElement="ol" itemElement="li" customClass="breadcrumb" separator="" routes={this.props.routes} />
				<div>
					정수진
					김현주
					길기범
					정일균
					장한을
					이원규
					정수진
					김현주
					길기범
					정일균
					장한을
					이원규
					정수진
					김현주
					길기범
					정일균
					장한을
					이원규
					정수진
					김현주
					길기범
					정일균
					장한을
					이원규
				</div>
			</div>
		);
	}
}
