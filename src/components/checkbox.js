import React, { Component } from 'react';
import '../styles/results_list.css';

class CheckBox extends Component {
	constructor(props) {
		super(props)
	}

	handleCheck() {
		let selectedContact = this.props.contact
		this.props.handleCheck(
			selectedContact.organize ? selectedContact.organize = false : selectedContact.organize = true
		)
		console.log(selectedContact.organize)
	}

	render() {
		return(
			<div className='col'>
				<input type="checkbox" checked={this.props.contact.organize} onChange={this.handleCheck.bind(this)} />
			</div>				
		)
	}
}				


export default CheckBox;