import React, { Component } from 'react';
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
			isChecked: {},
			className: ''
		}

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
				return contact.folder === event.target.value;
			})
			this.setState({
				contacts: organizedContacts
			})    
		}
  }

  folderChange(event) {
  	console.log(event.target.value)
  	console.log(event.target)
  	const contacts = this.props.data
  	// let updatedContacts = contacts.filter((contact) => {
  	// 	if (contact.folder === selectedContact.folder) {
  	// 		contact.folder === event.target.value
  	// 	}
	  // 	this.setState({ contacts: updatedContacts })
  	// })
  }


  checkBox(selectedContact) {
  	let updatedContacts = this.props.data
  	if (selectedContact.organize === true) {
  		selectedContact.organize = false
  		updatedContacts.filter((contact) => {
  			return contact.id !== selectedContact.id
  		})
  		this.setState({ 
  			contacts: updatedContacts
  		})
  	} else {
  		selectedContact.organize = true
  		updatedContacts.push(selectedContact)
  		this.setState({ 
  			contacts: updatedContacts
  		})
  	}
  }

	render() {
		return(
			<div className="results-list">
				<select onChange={this.handleChange.bind(this)}>
					<option value='all'>View All</option>
					<option value='Real Estate'>Real Estate</option>
					<option value='Groups'>Groups</option>
					<option value='Social Networking'>Social Networking</option>
					<option value='Entertainment'>Entertainment</option>
					<option value='Jobs'>Jobs</option>
					<option value='News'>News</option>
					<option value='Finance'>Finance</option>
					<option value='Business'>Business</option>
				</select>
				<input type="text" value={this.state.search} placeholder="Search for a sender..." onChange={this.searchInput.bind(this)}/>
				< SearchHeader />
				{this.state.contacts.map((contact) => {
					return (
						<div className={`flex-grid ${(contact.organize ? 'active' : 'hidden')}` }>
							<div className='col'>
								<input type="checkbox" checked={contact.organize} onChange={ () => this.checkBox(contact) } />
							</div>				
							<div className="col">{contact.sender}</div>
							<div className="col">{contact.domain}</div>
							<div className="col">{contact.email}</div>
							<div className="col">
								<select className="folder-option" onChange={ this.folderChange.bind(this)}>
									<option value='all'>{contact.folder}</option>
									<option value='Business'>Business</option>
									<option value='Business'>Business</option>
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

// class Results extends Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	render() {
// 		return(
// 			<div className={`flex-grid ${(contact.organize ? 'active' : 'hidden')}` }>
// 				<div className='col'>
// 					<input type="checkbox" checked={contact.organize} onChange={ () => this.checkBox(contact) } />
// 				</div>				
// 				<div className="col">{contact.sender}</div>
// 				<div className="col">{contact.domain}</div>
// 				<div className="col">{contact.email}</div>
// 				<div className="col">
// 					<select className="folder-option">
// 						<option value='all'>{contact.folder}</option>
// 						<option value='true'>Home</option>
// 						<option value='false'>Business</option>
// 						<option value='false'>Education</option>
// 						<option value='false'>Finance</option>
// 					</select>
// 				</div>
// 			</div>				
// 		)
// 	}
// }









class SearchFilter extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(event) {
		const contacts = this.props.data
		if (event.target.value === 'all') {
			this.setState({contacts: contacts})
		} else {
			let organizedContacts = contacts.filter((contact) => {
				return contact.folder === event.target.value;
			})
			this.setState({
				contacts: organizedContacts
			})    
		}
  }

	render() {
		return(
			<div>
				<select onChange={this.handleChange.bind(this)}>
					<option value='all'>View All</option>
					<option value='Real Estate'>Real Estate</option>
					<option value='Groups'>Groups</option>
					<option value='Social Networking'>Social Networking</option>
					<option value='Entertainment'>Entertainment</option>
					<option value='Jobs'>Jobs</option>
					<option value='News'>News</option>
					<option value='Finance'>Finance</option>
				</select>			
			</div>
		)
	}
}






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

