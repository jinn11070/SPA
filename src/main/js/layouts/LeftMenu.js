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
			<div class="column">
				{/* Generate second level menu(Navbar). */}
				<SecondLevelNavbar route={this.props.route} />
				{/* Page content. */}
				<div style={{marginTop:0, paddingTop: 0, marginLeft:200}}>
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
			<Navbar style={{position:'fixed', marginTop:0, zIndex:1, width:'10%'}}>
				<Nav navbar>
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
