import { connect } from 'react-redux';
import List from '../components/list';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        tabs: state.tabs
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer
