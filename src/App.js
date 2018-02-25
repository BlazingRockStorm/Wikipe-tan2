import React, { Component } from 'react';
import './App.css';
import ResultList from './result-list';
import SearchForm from './search-form';

class App extends Component {    
  constructor() {
    super();
    this.state = {
        results: [
            '', [], [], []
        ]
    };
  }

  handleSearch(searchTerm) {
    // $.ajax({
    //     type: 'GET',
    //     url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm,
    //     jsonpCallback: 'jsonCallback',
    //     contentType: "application/json",
    //     dataType: 'jsonp',
    //     success: (data) => {
    //         this.setState({ results: data });
    //     },
    //     error: function () {
    //         $(".out-result").html("Error");
    //     }
    // });
  }

  render(){
    return(
        <div>
            <SearchForm onSearch={this.handleSearch.bind(this)}/>
            <ResultList results={this.state.results}/>
        </div>
    );
  }
}

export default App;
