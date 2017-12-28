import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import Input from './Input';
import './css/ContactForm.css';

class ContactForm extends AdvancedComponent {

    render() {
        return (
            <form className='form'>
                <Input label='name' className='name-input'/>
                <Input label='email'/>
                <Input label='comment' textArea={ true }/>
            </form>
        );
    }
}

export default ContactForm;