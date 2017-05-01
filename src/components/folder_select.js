import React, { Component } from 'react';
import '../styles/results_list.css';

class FolderSelect extends Component {
	handleFolderChange(event) {
		this.props.handleFolderChange(
			event.target.value,
			this.props.contact
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

		const contactFolder = this.props.contact.folder

		if (this.props.contact.organize) {
			return(
				<div className="col">
					<select disabled className="folder-option">
						<option value={contactFolder}>{contactFolder}</option>
					</select>
				</div>
			)
		} else {
		return(
			<div className="col">
				<select className="folder-option" onChange={ this.handleFolderChange.bind(this)}>
					<option value={contactFolder}>{contactFolder}</option>
					{filteredFolders.map((folder) => {
						return <option key={folder} value={folder}>{folder}</option>
					})}
				</select>
			</div>
		)
		}
	}
}

export default FolderSelect;