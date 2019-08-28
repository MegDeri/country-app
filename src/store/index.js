import { createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';

const logger = createLogger();
const store = createStore(
    reducers,
    DevTools.instrument(),
    applyMiddleware(logger)
    );

export default store;