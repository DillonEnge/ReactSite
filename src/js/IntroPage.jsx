import React from 'react';
import { connect } from 'react-redux';
import { Images } from './images/Images';
import { hideIntro } from './redux';
import AdvancedComponent from './AdvancedComponent';
import Background from './Background';
import BodyContainer from './BodyContainer';
import Button from './Button';
import Title from './Title';
import './css/IntroPage.css';

const mapDispatchToProps = {
    hideIntro
};

class IntroPage extends AdvancedComponent {
    render() {
        const { hideIntro } = this.props;

        return (
            <div className='intro-page'>
                <Background />
                <Title title='kellie shaw'/>
                <BodyContainer empty={ true }>
                    <img className='intro-image' src={ Images[ 'Kellie1' ] } alt='' />
                    <img className='intro-image' src={ Images[ 'Kellie9' ] } alt='' />
                    <Button text='Enter' action={ hideIntro }/>
                </BodyContainer>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(IntroPage);