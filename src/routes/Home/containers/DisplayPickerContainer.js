import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as displayActions } from '../modules/display';

import DisplayPicker from '../components/DisplayPicker';


const mapStateToProps = (state) => ({
  collectionId: state.display.collectionId,
  options: state.display.options,
  selected: state.display.selected,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(displayActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPicker);
