import React, { Component } from 'react';
import { CollapsibleNav, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem,
	Grid, Row, Col, Modal, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as ajax from '../ajax';

const urlBase = '/bass';

export default class LeftMenu extends Component {
    constructor() {
        super();

        this.state = {
            thisPath: ''
        };
    }
    componentDidMount() {
        console.log(ajax.getThisPath());
        this.setState({
            thisPath: ajax.getThisPath()
        });

        console.log(this.props.thisPath);

    }

	render() {
		return (
			<div className="row">
				{/* Generate second level menu(Navbar). */}
				<div className="col-sm-3 col-lg-2">
					<LeftMenuNavbar route={this.props.route} />
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
 * Left menu navbar.
 */
class LeftMenuNavbar extends Component {

	render() {
		return (
			<Navbar style={{marginTop:0, zIndex:1}}>
				<Nav pullLeft>
					{
						(this.props.route.childRoutes ? this.props.route.childRoutes : []).map((item, i)=> {
							return (
								<LinkContainer key={item.name} to={urlBase + '/'+this.props.route.path+'/'+item.path} eventKey={this.props.route.path} onSelect={ajax.setThisPath}>
									<NavItem>{item.name}</NavItem>
								</LinkContainer>
							);
						})
					}
				</Nav>
			</Navbar>
		);
	}
}
