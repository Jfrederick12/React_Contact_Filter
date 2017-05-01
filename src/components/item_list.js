import React, { Component } from 'react';
import CheckBox from './checkbox';
import SearchHeader from './search_header';
import FolderSelect from './folder_select';
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
					return <Item contact={contact} />
				})}
			</div>
		)


	}
}

export default ItemList;

class Item extends Component {
	constructor(props) {
		super(props)

		this.handleCheck = this.handleCheck.bind(this)
		this.handleFolderChange = this.handleFolderChange.bind(this)
	}

	handleCheck(checked) {
  	this.setState({
  		checked: checked
  	})
  }

  handleFolderChange(folder, contact) {
  	contact.folder = folder

  	this.setState({
  		folder: folder
  	})
  }

	render() {
		return(
			<div className="flex-grid">
				< CheckBox contact={this.props.contact} handleCheck={this.handleCheck} />			
				<div className="col">{this.props.contact.sender}</div>
				<div className="col">{this.props.contact.email}</div>
				< FolderSelect 
				  contact={this.props.contact} 
				  handleFolderChange={this.handleFolderChange}
				/>
			</div>
		)
	}
}