export const LOAD_MEMES_START = 'LOAD_MEMES_START';
export const LOAD_MEMES_DONE = 'LOAD_MEMES_DONE';
export const LOAD_MEMES_ERR = 'LOAD_MEMES_ERR';

export const SELECT_MEME = 'SELECT_MEME';

export const CREATE_MEME_START = 'CREATE_MEME_START';
export const CREATE_MEME_DONE = 'CREATE_MEME_DONE';
export const CREATE_MEME_ERR = 'CREATE_MEME_ERR';

export const LOADER_START = 'LOADER_START';
export const LOADER_DONE = 'LOADER_DONE';

export function loaderStart() {
  return {
    type: LOADER_START
  };
}

export function loaderDone() {
  return {
    type: LOADER_DONE
  };
}

export function loadMemesStart() {
  return {
    type: LOAD_MEMES_START
  };
}

export function loadMemesDone(data) {
  return {
    type: LOAD_MEMES_DONE,
    payload: data
  };
}

export function loadMemesError(err) {
  return {
    type: LOAD_MEMES_ERR,
    error: err
  };
}

export function selectMeme(meme) {
  return {
    type: SELECT_MEME,
    payload: meme
  };
}

export function createMemesStart(data) {
  return {
    type: CREATE_MEME_START,
    payload: data
  };
}

export function createMemesDone(data) {
  return {
    type: CREATE_MEME_DONE,
    payload: data
  };
}

export function createMemesError(err) {
  return {
    type: CREATE_MEME_ERR,
    error: err
  };
}

const baseUrl = 'http://localhost:5000';

export function fetchMemeList(uri) {
  return async dispatch => {
    dispatch(loaderStart());
    dispatch(loadMemesStart());
    const response = await fetch(`${baseUrl}${uri}`);
    if (!response.ok || response.status === 500) {
      dispatch(loadMemesError(response.statusText));
      dispatch(loaderDone());
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      const memes = data.data.memes;
      if (memes) {
        dispatch(loadMemesDone(data.data.memes));
        dispatch(selectMeme(memes[0]));
        dispatch(loaderDone());
      }
    }
  };
}

export function createMeme(data) {
  return async dispatch => {
    dispatch(loaderStart());
    dispatch(createMemesStart(data));
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify({
        memeId: data.item.id,
        texts: data.texts
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(`${baseUrl}/memes`, fetchConfig);
    if (!response.ok || response.status === 500) {
      dispatch(createMemesError(response.statusText));
      dispatch(loaderDone());
      throw new Error(response.statusText);
    } else {
      const meme = await response.json();
      if (meme.success) {
        dispatch(selectMeme({ ...meme.data, name: data.item.name }));
      }
      dispatch(loaderDone());
    }
  };
}
