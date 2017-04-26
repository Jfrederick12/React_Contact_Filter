import React, { Component } from 'react';
import '../styles/results_item.css';

class ResultsItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const contact = this.props.contact
		return(
			<div>		
			hi hi hi 	
				<div className="col">{contact.sender}</div>
				<div className="col">{contact.domain}</div>
				<div className="col">{contact.email}</div>
				<div className="col">
					<select className="folder-option">
						<option value='all'>{contact.folder}</option>
						<option value='true'>Home</option>
						<option value='false'>Business</option>
						<option value='false'>Education</option>
						<option value='false'>Finance</option>
					</select>
				</div>
			</div>				
		)
	}
}


export default ResultsItem;