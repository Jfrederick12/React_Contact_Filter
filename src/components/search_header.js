import React, { Component } from 'react';
import '../styles/search_header.css';

class SearchHeader extends Component {
	render() {
		return(
			<div className="flex-grid">
				<div className="col">Sender</div>
				<div className="col">Domain</div>
				<div className="col">Email</div>
				<div className="col">Folder</div>
			</div>
		)
	}
};

export default SearchHeader;