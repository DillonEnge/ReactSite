import React, { Component } from 'react';
import Tab from './Tab';
import '../../css/TabContainer.scss';

class TabContainer extends Component {

    render() {
        return (
            <div className='tab-container'>
                <Tab label='about'/>
                <Tab label='gallery'/>
                <Tab label='contact'/>
            </div>
        );
    }
}

export default TabContainer;