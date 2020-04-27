import React from 'react';
import SingleResult from './single-result';

class ResultList extends React.Component {
    render() {
        var results = Object.keys(this.props.results).map((key) => this.props.results[key]).sort((a, b) => a.index - b.index)
        
        var show_results = results.map((result, index) => {
            return (
                <SingleResult key={index} pageid={result.pageid} title={result.title} extract={result.extract}/>
            );
        });

    return (<ul className="out-result">{show_results}</ul>);
    }
}

export default ResultList;