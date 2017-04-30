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
			checked: true,
			folder: '',
			searchContacts: this.props.filteredContacts
		}
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

    let changedContact = this.props.filteredContacts.filter((contact) => {
  		return contact.folder !== folder
  	})
    // filter is working... need to pass it through the list
  	console.log(changedContact)

  	this.setState({
  		folder: folder,
  		searchContacts: changedContact
  	})
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


		contactList = contactList.map((contact) => {
			return (
				<div className="flex-grid">
					< CheckBox contact={contact} handleCheck={this.handleCheck} />			
					<div className="col">{contact.sender}</div>
					<div className="col">{contact.email}</div>
					<div className="col">{contact.folder}</div>
					< FolderSelect 
					  contact={contact} 
					  handleFolderChange={this.handleFolderChange}
					/>
				</div>
			)
		})


		return(
			<div>
				< SearchHeader />
				{contactList}
			</div>
		)

	}
}

export default ItemList;




		// if (searchContacts.length === 0) {
		// 	contactList = searchContacts.map((contact) => {
		// 		return (
		// 			<div className="flex-grid">
		// 				< CheckBox contact={contact} handleCheck={this.handleCheck} />			
		// 				<div className="col">{contact.sender}</div>
		// 				<div className="col">{contact.email}</div>
		// 				< FolderSelect 
		// 				  contact={contact} 
		// 				  handleFolderChange={this.handleFolderChange}
		// 				/>
		// 			</div>
		// 		)
		// 	})
		// } else {
		// 	contactList = searchContacts.map((contact) => {
		// 		return (
		// 			<div key={contact.email} className="flex-grid">
		// 				< CheckBox contact={contact} handleCheck={this.handleCheck} />	
		// 				<div className="col">{contact.sender}</div>
		// 				<div className="col">{contact.email}</div>
		// 				< FolderSelect 
		// 				  contact={contact} 
		// 				  handleFolderChange={this.handleFolderChange}
		// 				/>
		// 			</div>
		// 		)
		// 	})
		// }