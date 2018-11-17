import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import MenuCarrot from './MenuCarrot';
import TabContainer from './TabContainer';
import '../../css/SlideMenu.scss';

class SlideMenu extends AdvancedComponent {
    renderMenu() {
        return (
            <TabContainer />
        );
    }

    renderCarrot() {
        return <MenuCarrot />
    }

    render() {
        return (
            <div className='slide-menu'>
            </div>
        );
    }
}
export default SlideMenu;