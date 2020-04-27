import React, { Component } from 'react';
import './App.css';
import ResultList from './result-list';
import SearchForm from './search-form';
import axios from 'axios';
 
class App extends Component {    
  constructor() {
    super();
    this.state = {
        results: []
    };
  }

  handleSearch(searchTerm) {
    const APIurl= 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='+searchTerm;
    axios.get(APIurl)
      .then(response=>{
        const results = response.data.query.pages;  
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
