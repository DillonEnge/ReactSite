import React from 'react';
import { connect } from 'react-redux';
import AdvancedComponent from './AdvancedComponent';
import TabContainer from './TabContainer';
import Title from './Title';
import BodyContainer from './BodyContainer';
import Seperator from './Seperator';
import Background from './Background';
import GalleryModal from './GalleryModal';
import IntroPage from './IntroPage';
import './css/MainApp.css';

const mapStateToProps = (state, ownProps) => ({
	galleryLogic: state.galleryLogicReducer,
	introLogic: state.introLogicReducer
});

class MainApp extends AdvancedComponent {
	renderHeader() {
		return (
    		<div className='header'>
				<TabContainer />
				<Seperator />
        		<Title title='kellie shaw'/>
			</div>
    	)
	}
	  
	render() {
		const { galleryLogic, introLogic } = this.props;
		const { pictureActive, activePicture }  = galleryLogic;
		const { introActive } = introLogic;

		console.log(activePicture);

		if (introActive) {
			return (
				<div className='main-app'>
					<IntroPage />
				</div>
			);
		}

    	return (
			<div className='main-app'>
				{ pictureActive && <GalleryModal /> }
				<Background />
				{ this.renderHeader() }
				<BodyContainer />
		  </div>
		);
 	}
}

export default connect(mapStateToProps)(MainApp);
