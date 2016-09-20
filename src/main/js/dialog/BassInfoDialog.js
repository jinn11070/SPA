import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well, Input } from 'react-bootstrap';
import {FormControls} from 'react-bootstrap';
import ModalDialog from './ModalDialog';

export default class BassInfoDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { bassInformation: null };
	}
	callbackSubmitButtonAction() {
		/*this.props.submitButtonAction({
			title: this.refs.title.getValue(),
			price: this.refs.price.getValue()
		})*/
	}
	render() {
		return (
			<ModalDialog title="Bass Information"
						 show={this.props.show}
						 close={this.props.close}>
				정보

			</ModalDialog>
		);
	}
}
