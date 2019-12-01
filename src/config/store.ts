import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga';
import { rootReducer } from './reducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const newReducer = require('./reducer').rootReducer;
            store.replaceReducer(newReducer);
        });
    }
    return store;
};
const store = configureStore();

export default store;