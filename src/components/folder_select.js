import React, { Component } from 'react';
import '../styles/results_list.css';

class FolderSelect extends Component {
	handleFolderChange(event) {
		this.props.handleFolderChange(
			event.target.value
		)
	}



	render() {
		const folderOptions = [
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

		let filteredFolders = folderOptions.filter((folder) => {
			return this.props.contact.folder !== folder
		})

		return(
			<div className="col">
				<select className="folder-option" onChange={ this.handleFolderChange.bind(this)}>
					<option value={this.props.contact.folder}>{this.props.contact.folder}</option>
					{filteredFolders.map((folder) => {
						return <option key={folder} value={folder}>{folder}</option>
					})}
				</select>
			</div>
		)
	}
}

export default FolderSelect;