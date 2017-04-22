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
			searchedContacts: this.props.data,
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

	// searchOrganized(event) {
	// 	this.setState({value: event.target.value});
	// 	const contacts = this.props.data
	// 	let organizedContacts = contacts.filter((contact) => {
	// 		return contact.organize === event.target.value;
	// 	})
	// 	this.setState({
	// 		contacts: organizedContacts
	// 	})
	// }


	render() {
		// let searchedContacts = this.state.contacts.filter((contact) => {
		// 	return contact.sender.indexOf(this.state.search) !== -1;
		// 	console.log(searchedContacts)
		// });		

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

export default ResultsList;

