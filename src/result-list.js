import React from 'react';
import SingleResult from './single-result';

class ResultList extends React.Component {
    render() {
        var results = this.props.results[1].map((result, index) => {
            return (
                <SingleResult key={index} title={this.props.results[1][index]} url={this.props.results[3][index]}/>
            );
        });
  
        return (<ul className="out-result">{results}</ul>);
    }
}

export default ResultList;