import React, { Component } from 'react';
import '../styles/results_list.css';

class FolderSelect extends Component {
	handleFolderChange(event) {
		this.props.handleFolderChange(
			event.target.value
		)
	}
	render() {
		return(
			<div className="col">
				<select className="folder-option" onChange={ this.handleFolderChange.bind(this)}>
					<option value={this.props.contact.folder}>{this.props.contact.folder}</option>
					<option value='Business'>Business</option>
					<option value='Travel'>Travel</option>
				</select>
			</div>
		)
	}
}

export default FolderSelect;