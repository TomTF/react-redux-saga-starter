import {COUNTER_INCREMENT} from "./counter.actions"

export function counterIncrement(state = { count: 0 }, action) {
    if (action.type === COUNTER_INCREMENT) {
        state.count += 1;
    }

    return {
        ...state
    };
}