import React, { Component } from 'react';
import './App.css';
import ResultList from './result-list';
import SearchForm from './search-form';
import axios from 'axios';
 
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
    const APIurl= 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search='+searchTerm;
    axios.get(APIurl)
      .then(response=>{
        const results = response.data;  
        this.setState({ results });
      })
      .catch(err => console.log(err));
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
