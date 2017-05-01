import React, { Component } from 'react';
import SearchBar from './search_bar';
import ItemList from './item_list';
import SearchFilter from './search_filter';
import '../styles/inbox.css';
import contactList from '../data/seeds';

class Inbox extends Component {
	constructor() {
		super();
		this.state = {
			contacts: contactList.sort((a,b) => {
				let firstName = a.sender.toLowerCase();
				let secondName = b.sender.toLowerCase();
				return (
					(firstName < secondName) ? -1 : (firstName > secondName)
				);
			}),
			filterText: '',
			filterSelect: '',
			filteredContacts: []
		}
		this.handleUserInput = this.handleUserInput.bind(this)
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}

  handleUserInput(filterText) {
    this.setState({
    	filterText: filterText
    })
  }

  handleFilterChange(filterSelect) {
  	const filteredContacts = this.state.contacts.filter((contact) => {
  		return contact.folder === filterSelect
  	})

  	this.setState({
  		filterSelect: filterSelect,
  		filteredContacts: filteredContacts
  	})
  }

	render() {
		return(
			<div>
				< SearchBar
				  filterText={this.state.filterText}
				  onUserInput={this.handleUserInput}
				/>
				< SearchFilter handleFilterChange={this.handleFilterChange} />
				<div className="item-container">
					< ItemList
					  contacts={this.state.contacts}
	          filterText={this.state.filterText}
  				  filterSelect={this.state.filterSelect}
  				  filteredContacts={this.state.filteredContacts}
				  />
			  </div>
			</div>
		)
	}
}

export default Inbox;
