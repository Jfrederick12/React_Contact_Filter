import React, { Component } from 'react';
import SearchBar from './search_bar';
import ItemList from './item_list';
import SearchFilter from './search_filter';
import Data from '../data/data.json';
import '../styles/inbox.css';

class Inbox extends Component {
	constructor() {
		super();
		this.state = {
			contacts: Data.sort((a,b) => {
				let firstName = a.name.toLowerCase();
				let secondName = b.name.toLowerCase();
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
  		return contact.folder === filterSelect || contact.sorted.toString() === filterSelect.toLowerCase()
  	})

  	this.setState({
  		filterSelect: filterSelect,
  		filteredContacts: filteredContacts
  	})
  }

	render() {
		return(
			<div>
				<div className="search-container">
					<div className="search-filter">
						< SearchFilter handleFilterChange={this.handleFilterChange} />
					</div>
					<div className="search-bar">
						< SearchBar
						  filterText={this.state.filterText}
						  onUserInput={this.handleUserInput}
						/>
					</div>
				</div>
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
