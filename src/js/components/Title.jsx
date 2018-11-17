import React, { Component } from 'react';
import '../../css/Title.scss';

class Title extends Component {

    render() {
        const { title } = this.props;

        return (
            <div className='text'>{ title }</div>
        );
    }
}

export default Title;