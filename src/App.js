import React, { Component } from 'react';
import './App.css';
import ResultList from './result-list';
import SearchForm from './search-form';

import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

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
    superagent.get('https://en.wikipedia.org/w/api.php') // Wikipedia API call
    .query({
        search: searchTerm,   // The search keyword passed by SearchForm
        action: 'opensearch', // You can use any kind of search here, they are all documented in the Wikipedia API docs
        format: 'json'        // We want JSON data back
    })
    .use(jsonp) // Use the jsonp plugin
    .end((error, response) => {
       if (error) {
           console.error(error);
       } else {
           this.setState({ results: response.body }); // Set the state once results are back
       }
    });
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
