import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well, Input } from 'react-bootstrap';
import {FormControls} from 'react-bootstrap';
import ModalDialog from './ModalDialog';
import * as ajax from '../ajax';

export default class UserNewDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { user: null };
	}
	callbackSubmitButtonAction() {
		/*this.props.submitButtonAction({
			title: this.refs.title.getValue(),
			price: this.refs.price.getValue()
		})*/
	}
	render() {
		return (
			<ModalDialog title="Create User"
						 show={this.props.show}
						 close={this.props.close}
						 additionalButton={<Button bsStyle="success" onClick={this.callbackSubmitButtonAction.bind(this)}>Create</Button>}>
				내용

			</ModalDialog>
		);
	}
}
