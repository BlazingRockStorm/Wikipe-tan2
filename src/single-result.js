import React from 'react';

class SingleResult extends React.Component {
    render() {
        var url = 'https://en.wikipedia.org/?curid=' + this.props.pageid
        return (
            <li>
                <a href={url} target='blank'>{this.props.title}</a>
                <p>{this.props.extract}</p>
            </li>
        )
    }
}

export default SingleResult;