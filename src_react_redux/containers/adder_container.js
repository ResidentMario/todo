import { connect } from 'react-redux';
import Adder from '../components/adder';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const AdderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Adder);

export default AdderContainer
