import React from 'react';
import { connect } from 'react-redux';
import AdvancedComponent from './AdvancedComponent';
import {
    showPicture
} from '../redux';
import '../../css/GalleryImage.scss';

const mapStateToProps = (state, ownProps) => ({  
    galleryLogic: state.galleryLogicReducer,
});
  
const mapDispatchToProps = {  
    showPicture
};

class GalleryImage extends AdvancedComponent {

    onImageClick = () => {
        const { showPicture, src } = this.props;

        showPicture(src);
    };

    render() {
        const { src } = this.props;

        return (
            <div className='gallery-image' onClick={ this.onImageClick }>
                <img src={ src } alt='' className='internal-image'/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImage);