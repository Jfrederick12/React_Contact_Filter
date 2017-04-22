import React, { Component } from 'react';
import ResultsItem from './results_item';
import SearchHeader from './search_header';
import '../styles/results_list.css';

class ResultsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.data,
			search: '',
			searchedContacts: this.props.data
		}
	}

	searchInput(event) {
		let searchedContacts = this.state.contacts.filter((contact) => {
			return contact.sender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
		});
		this.setState({
			search: event.target.value,
			contacts: searchedContacts				
		})
		console.log()
		console.log(this.state.search)
		console.log(this.state.contacts)
	}	

	searchOrganized(organized) {
		let organizedContacts = this.state.contacts.filter((contact) => {
			return contact.organize === organized;
		})
		this.setState({
			contacts: organizedContacts
		})
	}


	render() {
		// let searchedContacts = this.state.contacts.filter((contact) => {
		// 	return contact.sender.indexOf(this.state.search) !== -1;
		// 	console.log(searchedContacts)
		// });		

		return(
			<div className="results-list">
				<button onClick={ () => this.searchOrganized(false)}>unorganized</button>
				<button onClick={ () =>this.searchOrganized(true)}>organized</button>
				<input type="text" value={this.state.search} placeholder="Search for a sender..." onChange={this.searchInput.bind(this)}/>
				< SearchHeader />
				{this.state.contacts.map((contact) => {
					return (
						<div className="flex-grid">
							<div className="col">{contact.sender}</div>
							<div className="col">{contact.domain}</div>
							<div className="col">{contact.email}</div>
							<div className="col">{contact.folder}</div>
						</div>						
					)
				})}
			</div>
		)
	}
}

// `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)

export default ResultsList;

// < ResultsItem contact={contact} />
