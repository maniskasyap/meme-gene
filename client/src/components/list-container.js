import { MemeList } from './meme-list';
import { connect } from 'react-redux';
import { selectMeme } from '../redux/actions';

const mapStateToProps = state => {
  return {
    memes: state.memeList.data,
    current: state.selectMeme.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEachClick: each => {
      dispatch(selectMeme(each));
    }
  };
};

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeList);
