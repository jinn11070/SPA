import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import BassInfoDialog from '../dialog/BassInfoDialog';
import * as ajax from '../ajax';
/**
 * Application top menu structure.
 *
 * +-TopMenu---------------+
 * | TopMenuNavbar         |
 * | LeftMenuNavbar        |
 * | footer                |
 * +-----------------------+
 *
 */
export default class TopMenu extends Component {
	render() {
		return (
			<div>
				<TopMenuNavbar route={this.props.route} />
				{this.props.children}
			</div>
		);
	}
}

/**
 * Top menu navbar.
 */
class TopMenuNavbar extends Component {

	constructor() {
		super();

		this.state = {
			bassInfo: [],
			showViewDialog: false
		};
	}
	/*componentDidMount() {
		ajax.list('/login/getBassInformation', (data) => {
			this.setState({
				bassInformation: data
			});
		})
	}*/
	render() {
		console.log(JSON.stringify(this.props.route.childRoutes));
		return (
			<div>
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
							<NavItem onClick={()=>this.setState({showViewDialog:true})}>Info</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<BassInfoDialog show={this.state.showViewDialog}
								close={()=>this.setState({showViewDialog:false})}/>
			</div>

		);
	}
}

