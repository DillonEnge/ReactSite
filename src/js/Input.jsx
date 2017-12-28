import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import './css/Input.css';

class Input extends AdvancedComponent {

    renderInput() {
        const { textArea, label } = this.props;

        if (textArea) {
            return (
                <div className='outer-input'>
                    <textarea type='input' className='inner-textarea' placeholder={ 'Please enter your ' + label }/>
                </div>
            );
        }

        return (
            <div className='outer-input'>
                <input type='input' className='inner-input' placeholder={ 'Please enter your ' + label }/>
            </div>
        );
    }

    render() {
        return this.renderInput();
    }
}

export default Input;