import React, { PropTypes } from 'react';
import { ClimbView } from 'react-climb-social';


const DisplayPickerStage = ({ collectionId, layout, ...props }) => (
  <ClimbView
    collectionId={collectionId}
    View={layout}
    domain="http://curate.vm-08.graph.uk"
    {...props}
  />
);

DisplayPickerStage.propTypes = {
  name: PropTypes.string,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  collectionId: PropTypes.string,
};

export default DisplayPickerStage;
