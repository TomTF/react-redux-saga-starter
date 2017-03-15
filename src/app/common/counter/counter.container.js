import { connect } from 'react-redux';
import { increment } from './counter.actions';
import Counter from './counter';

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
    };
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);