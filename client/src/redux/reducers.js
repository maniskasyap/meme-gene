import { combineReducers } from 'redux';
import * as actions from './actions';

const Loader = {
  is: false
};

function loader(state = Loader, action) {
  switch (action.type) {
    case actions.LOADER_START:
      return {
        ...state,
        is: true
      };
    case actions.LOADER_DONE:
      return {
        ...state,
        is: false
      };
    default:
      return state;
  }
}

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

const Selected = {
  item: null
};

function selectMeme(state = Selected, action) {
  switch (action.type) {
    case actions.SELECT_MEME:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

const CreateMemes = {
  inProgress: false,
  data: null,
  error: null
};

function createMemes(state = CreateMemes, action) {
  switch (action.type) {
    case actions.CREATE_MEME_START:
      return {
        ...state,
        inProgress: true,
        error: null,
        data: null
      };
    case actions.CREATE_MEME_DONE:
      return {
        ...state,
        inProgress: false,
        data: action.payload
      };
    case actions.CREATE_MEME_ERR:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
}

const memes = combineReducers({
  loader: loader,
  memeList: memeList,
  selectMeme: selectMeme,
  createMemes: createMemes
});

export default memes;
