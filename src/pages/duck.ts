import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { takeEvery, call, put } from 'redux-saga/effects';
import { RssStore, RssFeed } from './types';
import { fetchRss } from 'queries/fetchRss';

const actionCreator = actionCreatorFactory('rss');

const SET_LOADING = 'SET_LOADING';
const GET_RSS = 'GET_RSS';
const SET_RSS = 'SET_RSS';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

export const actions = {
    setLoading: actionCreator<boolean>(SET_LOADING),
    getRss: actionCreator<string>(GET_RSS),
    setRss: actionCreator<RssFeed[]>(SET_RSS),
    setFetchError: actionCreator<string>(SET_FETCH_ERROR),
};

const initialState: RssStore = {
    isLoading: false,
    rss: [],
    fetchError: '',
};

export const rootReducer = reducerWithInitialState<RssStore>(initialState)
    .case(actions.setFetchError, (state, fetchError) => ({ ...state, fetchError }))
    .case(actions.setRss, (state, data) => ({ ...state, rss: data }))
    .case(actions.setLoading, (state, isLoading) => ({ ...state, isLoading }));

function* fetch(action) {
    yield put(actions.setLoading(true));
    yield put(actions.setFetchError(''));
    const url = action.payload;
    const data = yield call(fetchRss, url);
    if (!data.error){
        yield put(actions.setRss(data));
    } else {
        yield put(actions.setFetchError(data.error));
    }
    yield put(actions.setLoading(false));
}

export function* saga() {
    yield takeEvery(actions.getRss.type, fetch);
}