import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import { COPY } from './constants/COPY'
import './css/MenuCarrot.css';

class MenuCarrot extends AdvancedComponent {
    render() {
        return (
            <div className='menu-carrot'>{ COPY.CARROT }</div>
        );
    }
}
export default MenuCarrot;