import React, {Component} from 'react';
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createPersistor, getStoredState} from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import Immutable from 'seamless-immutable';

import App from './app/app.container';
import appReducers from './app/app.reducers';
import appSagas from './app/app.sagas';
import persistConfig from './app/app.persists';

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: null,
            history: null
        };

        const sagaMiddleware = createSagaMiddleware();

        const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

        const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
        const history = createHistory();

        getStoredState(persistConfig, (err, restoredState) => {
            const store = createStore(combineReducers({
                ...appReducers
            }), Immutable(restoredState), enhancer);

            sagaMiddleware.run(appSagas);
            createPersistor(store, persistConfig);
            this.setState({store, history});
        });
    }

    render() {
        if (!this.state.store) 
            return null;
        
        return (
            <Provider store={this.state.store}>
                <App history={this.state.history}/>
            </Provider>
        );
    }
}

export default Root;