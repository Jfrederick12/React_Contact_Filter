import React, { Component } from 'react';
import CheckBox from './checkbox';
import '../styles/results_list.css';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.contacts,
			checked: true
		}
		this.handleCheck = this.handleCheck.bind(this)
	}

  handleCheck(checked) {
  	console.log('thing')
  	this.setState({
  		checked: checked
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
						<div className="col">{contact.domain}</div>
						<div className="col">{contact.email}</div>
					</div>
				)
			})
		} else {
			contactList = searchContacts.map((contact) => {
				return (
					<div className="flex-grid">
						< CheckBox contact={contact} handleCheck={this.handleCheck} />	
						<div className="col">{contact.sender}</div>
						<div className="col">{contact.domain}</div>
						<div className="col">{contact.email}</div>
					</div>
				)
			})
		}

		return(
			<div>
				{contactList}
			</div>
		)

	}
}

export default ItemList;