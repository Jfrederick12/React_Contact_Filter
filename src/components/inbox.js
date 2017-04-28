import React, { Component } from 'react';
import SearchBar from './search_bar';
import ItemList from './item_list';
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
			filterText: ''
		}
		this.handleUserInput = this.handleUserInput.bind(this)
	}

  handleUserInput(filterText) {
    this.setState({
    	filterText: filterText
    })
  }

	render() {
		return(
			<div>
				< SearchBar
				  filterText={this.state.filterText}
				  onUserInput={this.handleUserInput}
				/>
				<div className="item-container">
					< ItemList
					  contacts={this.state.contacts}
	          filterText={this.state.filterText}
				  />
			  </div>
			</div>
		)
	}
}

export default Inbox;