import React, { Component } from 'react';
import '../styles/search_bar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',

		}

	}

	searchInput(event) {
		let searchedContacts = this.props.contacts.filter((contact) => {
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
		return(
			<div>
				<input type="text" value={this.state.search} placeholder="Search for a sender..." onChange={this.searchInput.bind(this)}/>
			</div>
		)
	}
}

export default SearchBar;