import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Second level structure.
 *
 * +-TopLevel--------------+
 * | TopLevelNavbar        |
 * | +-SecondLevel-------+ |
 * | | SecondLevelNavBar | |
 * | | {childlen}        | |
 * | +-------------------+ |
 * | footer                |
 * +-----------------------+
 */
export default class LeftMenu extends Component {

	render() {
		return (
			<div className="row">
				{/* Generate second level menu(Navbar). */}
				<div className="col-sm-3 col-lg-2">
					<SecondLevelNavbar route={this.props.route} />
				</div>
				{/* Page content. */}
				<div className="col-sm-9 col-lg-10">
					{this.props.children}
				</div>
			</div>
		);
	}
}

/**
 * Second level menu navbar.
 */
class SecondLevelNavbar extends Component {
	render() {
		return (
			<Navbar style={{marginTop:0, zIndex:1}}>
				<Nav pullLeft>
					<LinkContainer key="userManagement" to="/bass/userManagement">
						<NavItem>User Management</NavItem>
					</LinkContainer>
					<LinkContainer key="groupManagement" to="/bass/groupManagement">
						<NavItem>Group Management</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}
