import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Application top level structure.
 *
 * +-TopLevel--------------+
 * | TopLevelNavbar        |
 * | +-SecondLevel-------+ |
 * | | SecondLevelNavBar | |
 * | | {childlen}        | |
 * | +-------------------+ |
 * | footer                |
 * +-----------------------+
 *
 */
export default class TopMenu extends Component {
	render() {
		return (
			<div>
				{/* Top level menu(Navbar)*/}
				<TopLevelNavbar route={this.props.route} />
				{this.props.children}
			</div>
		);
	}
}

/**
 * Top level menu navbar.
 */
class TopLevelNavbar extends Component {
	render() {
		return (
			<Navbar fixedTop>
				<Navbar.Header>
					<Navbar.Brand><a href="#">BASS</a></Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						{
							this.props.route.childRoutes.map((item)=> {
								return (
									<LinkContainer key={item.name} to={item.path}>
										<NavItem>{item.name}</NavItem>
									</LinkContainer>
								);
							})
						}
					</Nav>

					<Nav pullRight>
						{/* Data Analysis. */}
						<NavDropdown title="Data Analysis" id="collapsible-nav-dropdown" to="/dataAnalysis/queryEditor">
							<LinkContainer key="queryEditor" to="/dataAnalysis/queryEditor">
								<MenuItem>Query Editor</MenuItem>
							</LinkContainer>
							<LinkContainer key="dashboard" to="/dataAnalysis/dashboard">
								<MenuItem>Dashboard</MenuItem>
							</LinkContainer>
						</NavDropdown>

						{/* Management. */}
						<NavDropdown title="Management" id="collapsible-nav-dropdown" to="/management/userManagement">
							<LinkContainer key="userManagement" to="/management/userManagement">
								<MenuItem>User Management</MenuItem>
							</LinkContainer>
							<LinkContainer key="groupManagement" to="/management/groupManagement">
								<MenuItem>Group Management</MenuItem>
							</LinkContainer>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}

