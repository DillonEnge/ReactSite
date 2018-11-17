import React from 'react';
import { connect } from 'react-redux';
import AdvancedComponent from './AdvancedComponent';
import {
    changePage
} from '../redux';
import '../../css/Tab.scss';

const mapStateToProps = (state, ownProps) => ({  
    tabLogic: state.tabLogicReducer,
});
  
const mapDispatchToProps = {  
    changePage,
};

class Tab extends AdvancedComponent {

    tabClick = () => {
        const { changePage, label } = this.props

        changePage(label);
    }
    
    render() {
        const label = this.props.label;
        console.log(this.props.tabLogic.page);
        return (
            <div className='tab' onClick={ this.tabClick }>
                { label }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);