import React, { Component } from 'react';
import ResultsList from './results_list'
import '../styles/inbox.css';
import Data from '../data/mock_rp_data.json'

class Inbox extends Component {
	constructor() {
		super();
		this.state = {
			contacts: Data.sort((a,b) => {
				let firstName = a.sender.toLowerCase();
				let secondName = b.sender.toLowerCase();
				return (
					(firstName < secondName) ? -1 : (firstName > secondName)
				);
			}),
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