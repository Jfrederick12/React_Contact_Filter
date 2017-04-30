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
		  'Travel', 
		  'Vacation', 
		  'Entertainment', 
		  'Jobs',
		  'News',
		  'Finance',
		  'Home',
		  'Education',
		  'Real Estate',
		  'Social Networking',
		  'Groups',
		  'Shopping'
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
