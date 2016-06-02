import React, { PropTypes } from 'react';
import { ClimbView } from 'react-climb-social';


const DisplayPickerStage = ({ layout, ...props }) => (
  <ClimbView
    View={layout}
    hostname="curate.vm-08.graph.uk"
    {...props}
  />
);

DisplayPickerStage.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  collectionId: PropTypes.string,
};

export default DisplayPickerStage;
