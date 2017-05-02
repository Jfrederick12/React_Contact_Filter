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
		  { id: 1,
		  	folder: 'Business'
		  }, {
		  	id: 2,
		  	folder: 'Vacation'
		  }, {
		  	id: 3,
		  	folder: 'Hobbies'
		  }, {
		  	id: 4,
		  	folder: 'Entertainment'
		  }, {
		  	id: 5,
		  	folder: 'News'
		  }, {
		  	id: 6,
		  	folder: 'Shopping'
		  }, {
		  	id: 7,
		  	folder: 'Tech'
		  }, {
		  	id: 8,
		  	folder: 'Sports'
		  }
		] 

		return(
			<div className="search-select">
				<select onChange={ this.handleFilterChange.bind(this)}>
					<option defaultValue='Select Filter' hidden>Select Filter</option>
					<option value='true'>Organized</option>
					<option value='false'>Unorganized</option>

					{folderOptions.map((option) => {
						return <option key={option.id} value={option.folder}>{option.folder}</option>
					})}

				</select>
			</div>
		)
	}
}

export default SearchFilter;
