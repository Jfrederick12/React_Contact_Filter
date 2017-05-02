import React, { Component } from 'react';
import SearchHeader from './search_header';
import ListItem from './list_item';
import '../styles/results_list.css';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.filteredContacts,
			searchContacts: this.props.filteredContacts
		}
	
	}


	render() {
		let contactList = this.state.searchContacts
		// if there is nothing logged in the input
		if (this.props.filterText.length !== 0 || this.props.filterSelect !== 'All') {
			//set searchContacts array to filter out all contacts EXCEPT the one that matches the given input
			contactList = this.props.filteredContacts.filter((contact) => {
				return contact.sender.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
			})
		} 

		return(
			<div>
				< SearchHeader />
				{contactList.map((contact) => {
					return (
						<div key={contact.sender}>
							< ListItem contact={contact} />
						</div>
					)
				})}
			</div>
		)


	}
}

export default ItemList;