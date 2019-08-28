import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
    reducers,
    DevTools.instrument()
);

store.dispatch(getCountries());

export default store;