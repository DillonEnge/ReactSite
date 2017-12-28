import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import { connect } from 'react-redux';
import { hidePicture } from './redux';
import Background from './Background';
import Button from './Button';
import './css/GalleryModal.css';

const mapStateToProps = (state, ownProps) => ({
    galleryLogic: state.galleryLogicReducer
});

const mapDispatchToProps = {
    hidePicture
};

class GalleryModal extends AdvancedComponent {

    render() {
        const { galleryLogic, hidePicture } = this.props;
        const { activePicture } = galleryLogic;

        return (
            <div className='gallery-modal'>
                <Background type='blur'/>
                <img src={ activePicture } alt='' className='image'/>
                <Button label='button-close' action={ hidePicture } text='X' />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal);