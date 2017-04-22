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



	render() {
		// let searchedContacts = this.state.contacts.filter((contact) => {
		// 	return contact.sender.indexOf(this.state.search) !== -1;
		// 	console.log(searchedContacts)
		// });		

		return(
			<div className="results-list">
				<input type="text" value={this.state.search} onChange={this.searchInput.bind(this)}/>
				< SearchHeader />
				{this.state.contacts.map((contact) => {
					return <p>{contact.sender}</p>
				})}
			</div>
		)
	}
}

// `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)

export default ResultsList;

// < ResultsItem contact={contact} />
