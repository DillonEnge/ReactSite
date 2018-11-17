import React from 'react';
import { connect } from 'react-redux';
import { Images } from '../../images/Images';
import { hideIntro } from '../redux';
import AdvancedComponent from './AdvancedComponent';
import Background from './Background';
import BodyContainer from './BodyContainer';
import Button from './Button';
import Title from './Title';
import '../../css/IntroPage.scss';

const mapDispatchToProps = {
    hideIntro
};

class IntroPage extends AdvancedComponent {
    componentDidMount() {
		const { hideIntro } = this.props;


    	setTimeout(() => {
			hideIntro();
		}, 4000);
    }

    render() {
        const { hideIntro } = this.props;

        return (
            <div className='intro-page'>
                <Background />
                <img className='intro-image' src={ Images[ 'KellieLogo' ] } alt=''/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(IntroPage);