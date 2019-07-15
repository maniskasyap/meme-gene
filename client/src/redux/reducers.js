import { combineReducers } from 'redux';
import * as actions from './actions';

const Memes = {
  isLoading: false,
  data: null,
  error: null
};

function memeList(state = Memes, action) {
  switch (action.type) {
    case actions.LOAD_MEMES_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null
      };
    case actions.LOAD_MEMES_DONE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case actions.LOAD_MEMES_ERR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
}

const memes = combineReducers({
  memeList: memeList
});

export default memes;
