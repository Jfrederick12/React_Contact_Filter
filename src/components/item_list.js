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

  handleFolderChange(folder) {
  	console.log(folder)
  	this.setState({
  		folder: folder
  	})
  }

	render() {
		let searchContacts = []
		let contactList = []
		if (this.props.filterText !== '') {
			searchContacts = this.state.contacts.filter((contact) => {
				return contact.sender.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 ;
			})
		}


		if (searchContacts.length === 0) {
			contactList = this.state.contacts.map((contact) => {
				return (
					<div className="flex-grid">
						< CheckBox contact={contact} handleCheck={this.handleCheck} />			
						<div className="col">{contact.sender}</div>
						<div className="col">{contact.email}</div>
						< FolderSelect 
						  contact={contact} 
						  handleFolderChange={this.handleFolderChange}
						/>
					</div>
				)
			})
		} else {
			contactList = searchContacts.map((contact) => {
				return (
					<div className="flex-grid">
						< CheckBox contact={contact} handleCheck={this.handleCheck} />	
						<div className="col">{contact.sender}</div>
						<div className="col">{contact.email}</div>
						< FolderSelect 
						  contact={contact} 
						  handleFolderChange={this.handleFolderChange}
						/>
					</div>
				)
			})
		}

		return(
			<div>
				< SearchHeader />
				{contactList}
			</div>
		)

	}
}

export default ItemList;