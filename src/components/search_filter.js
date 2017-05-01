import React, { Component } from 'react';

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
			<select onChange={ this.handleFilterChange.bind(this)}>
				{folderOptions.map((folder) => {
					return <option value={folder}>{folder}</option>
				})}
			</select>
		)
	}
}

export default SearchFilter;
