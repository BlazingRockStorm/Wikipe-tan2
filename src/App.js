import React, { Component } from 'react';
import './App.css';
import ResultList from './result-list';
import SearchForm from './search-form';
import $ from 'jquery'; 
// import axios from 'axios';
 
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
    $.ajax({
        type: 'GET',
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: (data) => {
            this.setState({ results: data });
        },
        error: function () {
            $(".out-result").html("Error");
        }
    });
    // axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=` + searchTerm )
    //   .then(response=>{
    //     const results = response.data;  
    //     this.setState({ results });
    //   })
    //   .catch(err => console.log(err));
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
