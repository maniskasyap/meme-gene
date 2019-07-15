import { MemeList } from './meme-list';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    memes: state.memeList.data
  };
};

export const ListContainer = connect(mapStateToProps)(MemeList);
