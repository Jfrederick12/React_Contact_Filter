import React, { Component } from 'react';
import '../styles/search_header.css';

class SearchHeader extends Component {
	render() {
		return(
			<div className="search-header">
				<div>Sorted</div>
				<div>Sender</div>
				<div>Email</div>
				<div>Folder</div>
			</div>
		)
	}
};

export default SearchHeader;