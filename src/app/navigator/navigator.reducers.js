import Immutable from 'seamless-immutable';
import {NavigatorTypes} from './navigator.actions';

const INITIAL_STATE = Immutable({
    route: ''
});

const navigate = (state, {route}) => {
    return state.merge({route});
}

const ACTION_HANDLERS = {
    [NavigatorTypes.NAVIGATE]: navigate
}

export default function reducers(state = INITIAL_STATE, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler
        ? handler(state, action)
        : state
}