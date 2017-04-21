import React, { Component } from 'react';
import ResultsList from './results_list'
import '../styles/inbox.css';
import Data from '../data/mock_rp_data.json'

class Inbox extends Component {
	constructor() {
		super();
		this.state = {
			contacts: Data
		}
	}

	render() {
		return(
			<div>
				< ResultsList data={this.state.contacts} />
			</div>
		)
	}
}

export default Inbox;

				// {this.state.contacts.map((contact) => {
				// 	return <p>{contact.sender}</p>
				// })}