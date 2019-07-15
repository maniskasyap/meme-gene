import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import memes from './reducers';
import { fetchMemeList } from './actions';

export const memeStore = createStore(memes, applyMiddleware(thunk));
memeStore.dispatch(fetchMemeList('/memes'));
