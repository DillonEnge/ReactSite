import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import Gallery from './Gallery';
import { COPY } from '../constants/COPY';
import '../../css/BodyContainer.scss';

const mapStateToProps = (state, ownProps) => ({
    tabLogic: state.tabLogicReducer
});

class BodyContainer extends Component {

    renderAbout() {
        return (
            <div>
                <p>
                    { COPY.ABOUT }
                </p>
            </div>
        );
    }

    renderGallery() {
        return (
            <div>
                <Gallery />
            </div>
        );
    }

    renderShop() {
        return (
            <div>
                <p>
                    { COPY.SHOP }
                </p>
            </div>
        );
    }

    renderContact() {
        return (
            <div>
                <ContactForm />
            </div>
        );
    }

    renderContent() {
        const { page } = this.props.tabLogic;

        switch(page) {
            case 'about':
                return this.renderAbout();
            case 'gallery':
                return this.renderGallery();
            case 'shop':
                return this.renderShop();
            case 'contact':
                return this.renderContact();
            default:
                return this.renderAbout();
        }
    }

    render() {
        const { empty } = this.props;
        return (
            <div className='body-container'>
                { !empty && this.renderContent() }
                { this.props.children }
            </div>
        );
    }
}

export default connect(mapStateToProps)(BodyContainer);