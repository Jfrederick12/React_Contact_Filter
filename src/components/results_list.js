import React, { Component } from 'react';
import ResultsItem from './results_item';
import '../styles/results_list.css';

class ResultsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.data
		}
	}

	render() {
		return(
			<div className="results-list">
				{this.state.contacts.map((contact) => {
					return < ResultsItem contact={contact} />
				})}
			</div>
		)
	}
}

export default ResultsList;
