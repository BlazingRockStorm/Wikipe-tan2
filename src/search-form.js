import React from 'react';

class SearchForm extends React.Component {

    constructor() {
        super();
        this.state = {
          searchTerm: ''
        };
    }
  
    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.searchTerm.trim(); // Remove whitespace at the beginning and end.
  
        if (!searchTerm) { // If no search term was typed, return early and do nothing.
            return;
        }
  
        this.props.onSearch(searchTerm); // Execute callback
        this.setState({ searchTerm: '' });
    }
  
    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input id="searchTerm" className="input-sm" type="text" placeholder="Search for something..." onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
                </form>
                <button id="search" type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}><span className="fa fa-search"></span></button>
            </div>
        );
    }
}

export default SearchForm;