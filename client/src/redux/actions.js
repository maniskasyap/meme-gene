export const LOAD_MEMES_START = 'LOAD_MEMES_START';
export const LOAD_MEMES_DONE = 'LOAD_MEMES_DONE';
export const LOAD_MEMES_ERR = 'LOAD_MEMES_ERR';

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

const baseUrl = 'http://localhost:5000';

export function fetchMemeList(uri) {
  return async dispatch => {
    dispatch(loadMemesStart());
    const response = await fetch(`${baseUrl}${uri}`);
    if (!response.ok || response.status === 500) {
      dispatch(loadMemesError(response.statusText));
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      dispatch(loadMemesDone(data.data.memes));
    }
  };
}
