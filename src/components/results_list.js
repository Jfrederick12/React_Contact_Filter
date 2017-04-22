import React, { Component } from 'react';
import ResultsItem from './results_item';
import SearchHeader from './search_header';
import '../styles/results_list.css';

class ResultsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.data,
			searchedContacts: this.props.data,
			search: '',
			isOrganized: 'true',
			isChecked: {}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	searchInput(event) {
		const contacts = this.props.data
		let searchedContacts = contacts.filter((contact) => {
			return contact.sender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
		});
		this.setState({
			search: event.target.value,
			contacts: searchedContacts				
		})
	}	

	handleChange(event) {
		const contacts = this.props.data
		if (event.target.value === 'all') {
			this.setState({contacts: contacts})
		} else {
			let organizedContacts = contacts.filter((contact) => {
				return contact.organize.toString() === event.target.value;
			})
			this.setState({
				contacts: organizedContacts
			})    
		}
  }

  checkBox(selectedContact) {
  	let updatedContacts = this.props.data
  	if (selectedContact.organize === true) {
  		console.log('pizza!')
  		selectedContact.organize = false
  		for (let i = 0; i < selectedContact.length; i ++) {
  			if (this.state.contacts[i].sender === selectedContact.sender) {
  				updatedContacts.splice(i, this.state.contacts[i].sender)
  				this.setState({ contacts: updatedContacts})
  				console.log(this.state.contacts[i].sender)
  			}
  		}
  	} else {
  		selectedContact.organize = true
  		updatedContacts.push(selectedContact)
  		this.setState({ contacts: updatedContacts })
  		console.log('nope')
  	}
  }



	render() {
		return(
			<div className="results-list">
				<select onChange={this.handleChange}>
					<option value='all'>View All</option>
					<option value='true'>Organized</option>
					<option value='false'>Unorganized</option>
				</select>
				<input type="text" value={this.state.search} placeholder="Search for a sender..." onChange={this.searchInput.bind(this)}/>
				< SearchHeader />
				{this.state.contacts.map((contact) => {
					return (
						<div className="flex-grid">
							<div className="col">
								<input type="checkbox" checked={contact.organize} onChange={ () => this.checkBox(contact) } />
							</div>				
							<div className="col">{contact.sender}</div>
							<div className="col">{contact.domain}</div>
							<div className="col">{contact.email}</div>
							<div className="col">
								<select className="folder-option">
									<option value='all'>{contact.folder}</option>
									<option value='true'>Home</option>
									<option value='false'>Business</option>
									<option value='false'>Education</option>
									<option value='false'>Finance</option>
								</select>
							</div>
						</div>						
					)
				})}
			</div>
		)
	}
}

export default ResultsList;

class OrganizedCheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }




	render() {
		return(
			<div className="col">
				<label>
          <input
            name="checked"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleInputChange} />
        </label>
			</div>
		)
	}
}

