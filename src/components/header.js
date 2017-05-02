import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
	render() {
		return(
			<div>
				<div className="social-icon">
					<nav>
						<a href='https://github.com/Jfrederick12/React_Contact_Filter' className="social-icon"><i className="fa fa-github-alt fa-2x"></i></a>
						<a href='http://jfrederickportfolio.herokuapp.com/'>www.justin-frederick.com</a>
					</nav>
				</div>
				<h1>Contact-o-Matic</h1>
			</div>
		)
	}
}

export default Header;