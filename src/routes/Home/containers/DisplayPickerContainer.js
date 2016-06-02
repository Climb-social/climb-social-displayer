import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as displayActions } from '../modules/display';
import { findView } from 'react-climb-social';

import DisplayPicker from '../components/DisplayPicker';


const mapStateToProps = ({ display }) => ({
  collectionId: display.collectionId,
  options: display.options,
  selected: display.selected,
  layout: findView(display.selected.layout),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(displayActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPicker);
