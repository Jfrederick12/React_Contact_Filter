import React, { Component } from 'react';
import '../styles/folder_select.css';
import '../styles/results_list.css';

class FolderSelect extends Component {
	handleFolderChange(event) {
		this.props.handleFolderChange(
			event.target.value,
			this.props.contact
		)
		this.setState({ style: 'active'})
	}

	render() {
		const folderOptions = [
		  'Business', 
		  'Vacation', 
		  'Hobbies', 
		  'Entertainment', 
		  'News', 
		  'Shopping', 
		  'Tech', 
		  'Sports'
		] 

		let filteredFolders = folderOptions.filter((folder) => {
			return this.props.contact.folder !== folder
		})

		const contactFolder = this.props.contact.folder

		return(
			<div className="col">
				{
					this.props.contact.organize ? 
						<div className={`folder-option ${contactFolder}`} >
							<select disabled>
								<option value={contactFolder}>{contactFolder}</option>
							</select>
						</div>
					:
						<div className={`folder-option ${contactFolder}`}>
							<select onChange={ this.handleFolderChange.bind(this)}>
								<option value={contactFolder}>{contactFolder}</option>
								{filteredFolders.map((folder) => {
									return <option key={folder} value={folder}>{folder}</option>
								})}
							</select>
						</div>						
				}
			</div>
		)
	}
}

export default FolderSelect;