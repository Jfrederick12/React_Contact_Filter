import React, { Component } from 'react';
import CheckBox from './checkbox';
import FolderSelect from './folder_select';
import '../styles/results_list.css';

class ListItem extends Component {
	constructor(props) {
		super(props)

		this.handleCheck = this.handleCheck.bind(this)
		this.handleFolderChange = this.handleFolderChange.bind(this)
	}

	handleCheck(checked) {
  	this.setState({
  		checked: checked
  	})
  }

  handleFolderChange(folder, contact) {
  	contact.folder = folder

  	this.setState({
  		folder: folder
  	})
  }

	render() {
		return(
			<div className="flex-grid">
				< CheckBox contact={this.props.contact} handleCheck={this.handleCheck} />			
				<div className="col">{this.props.contact.name}</div>
				<div className="col">{this.props.contact.email}</div>
				< FolderSelect 
				  contact={this.props.contact} 
				  handleFolderChange={this.handleFolderChange}
				/>
			</div>
		)
	}
}

export default ListItem;