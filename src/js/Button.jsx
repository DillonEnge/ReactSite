import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import './css/Button.css';

class Button extends AdvancedComponent {
    render() {
        const { action, text, label } = this.props;
        const name = label ? 'button ' + label : 'button';

        return (
            <div className={ name } onClick={ action }>{ text }</div>
        );
    }
}

export default Button;