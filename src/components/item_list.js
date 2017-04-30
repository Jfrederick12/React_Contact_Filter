import React, { Component } from 'react';
import CheckBox from './checkbox';
import SearchHeader from './search_header';
import FolderSelect from './folder_select';
import '../styles/results_list.css';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.contacts,
			checked: true,
			folder: ''
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

   //  this.state.contacts.filter((contact) => {
  	// 	contact.folder !== folder
  	// })

  	this.setState({
  		folder: folder
  	})
  }

	render() {

		let searchContacts = this.state.contacts

		// let searchContacts = this.state.contacts.filter((contact) => {
		// 	return this.props.filterSelect === contact.folder
		// })
		let contactList = []
		console.log(this.props.filterSelect)

		// if there is nothing logged in the input
		if (this.props.filterText.length !== 0 || this.props.filterSelect !== 'All') {
			//set searchContacts array to filter out all contacts EXCEPT the one that matches the given input
			searchContacts = this.props.filteredContacts.filter((contact) => {
				return contact.sender.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
			})
		} 




		console.log(searchContacts)

			contactList = searchContacts.map((contact) => {
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