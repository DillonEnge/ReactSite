import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import '../../css/Background.scss';

class Background extends AdvancedComponent {
    renderBackground() {
        const { type } = this.props;

        if (type === 'blur') {
            return (
                <div className='background-blur'></div>
            );
        }

        return (
            <div className='background'></div>
        );
    };

    render() {
        return (
            this.renderBackground()
        );
    }
}

export default Background;