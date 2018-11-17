import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import { connect } from 'react-redux';
import { hidePicture } from '../redux';
import Background from './Background';
import Button from './Button';
import '../../css/GalleryModal.scss';

const mapStateToProps = (state, ownProps) => ({
    galleryLogic: state.galleryLogicReducer
});

const mapDispatchToProps = {
    hidePicture
};

class GalleryModal extends AdvancedComponent {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        const { hidePicture } = this.props;

        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            hidePicture();
        }
    }

    render() {
        const { galleryLogic, hidePicture } = this.props;
        const { activePicture } = galleryLogic;

        return (
            <div className='gallery-modal'>
                <Background type='blur'/>
                <img src={ activePicture } alt='' className='image' ref={ this.setWrapperRef }/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal);