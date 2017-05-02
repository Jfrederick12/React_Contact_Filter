import React, { Component } from 'react';
import '../styles/search_bar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',

		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

	render() {
		return(
			<div>
        <input
          type="text"
          placeholder="Search by name..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
			</div>
		)
	}
}

export default SearchBar;