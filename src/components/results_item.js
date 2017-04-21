import React, { Component } from 'react';
import '../styles/results_item.css';

class ResultsItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: this.props.contact
		}
	}

	render() {
		return(
			<div className="flex-grid">
				<div className="col">{this.state.contact.sender}</div>
				<div className="col">{this.state.contact.domain}</div>
				<div className="col">{this.state.contact.email}</div>
				<div className="col">{this.state.contact.folder}</div>
			</div>
		)
	}
}

export default ResultsItem;