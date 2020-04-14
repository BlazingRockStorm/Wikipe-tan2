import React from 'react';

class SingleResult extends React.Component {
    render() {
        return (
            <li>
                <a href= {this.props.url} target='blank'>{this.props.title}</a>
            </li>
        )
    }
}

export default SingleResult;