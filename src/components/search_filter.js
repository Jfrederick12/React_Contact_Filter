import React, { Component } from 'react';
import '../styles/search_filter.css';

class SearchFilter extends Component {
	handleFilterChange(event) {
		this.props.handleFilterChange(
			event.target.value,
			this.props.contact
		) 
	}

	render() {
		const folderOptions = [
			'All',
		  'Business', 
		  'Vacation', 
		  'Hobbies', 
		  'Entertainment', 
		  'News', 
		  'Shopping', 
		  'Tech', 
		  'Sports'
		] 
		return(
			<div className="search-select">
				<select onChange={ this.handleFilterChange.bind(this)}>
					{folderOptions.map((folder) => {
						return <option value={folder}>{folder}</option>
					})}
				</select>
			</div>
		)
	}
}

export default SearchFilter;
