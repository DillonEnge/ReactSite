import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import { COPY } from '../constants/COPY'
import '../../css/MenuCarrot.scss';

class MenuCarrot extends AdvancedComponent {
    render() {
        return (
            <div className='menu-carrot'>{ COPY.CARROT }</div>
        );
    }
}
export default MenuCarrot;