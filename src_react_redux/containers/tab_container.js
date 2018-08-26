import { connect } from 'react-redux';
import Tab from '../components/tab';
import { changeTabState } from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    if (ownProps.name === "Done") {
        return {activation_state: state.tabs.done};
    } else {
        return {activation_state: state.tabs.not_done};
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(changeTabState(ownProps.name))
    };
};

const TabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab);

export default TabContainer
