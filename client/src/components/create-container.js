import { MemeFinal } from './meme-final';
import { CaptionForm } from './meme-caption-form';
import { createMeme } from '../redux/actions';
import { connect } from 'react-redux';

const mapState = state => {
  return {
    item: state.selectMeme.item
  };
};

const mapDispatch = dispatch => {
  return {
    onHandleSubmit: data => dispatch(createMeme(data))
  };
};

export const CreateResult = connect(mapState)(MemeFinal);
export const CreateForm = connect(
  mapState,
  mapDispatch
)(CaptionForm);
