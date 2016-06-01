import React, { PropTypes } from 'react';
import Navigation from './DisplayPickerNavigation';
import Stage from './DisplayPickerStage';
import EmbedCode from './DisplayPickerEmbedCode';

import FastInput from 'components/FastInput';

const DisplayPicker = ({ setCollection, collectionId, ...props }) => (
  <div>
    <FastInput
      type="text"
      value={collectionId}
      onChange={setCollection}
    />

    {collectionId?
      <div>
        <Navigation
          {...props}
        />

        <Stage
          collectionId={collectionId}
          {...props}
        />

        <EmbedCode />
      </div>
      :
      <div>
        <p>Provide a Collection ID</p>
        <p>EmptyState here</p>
      </div>
    }
  </div>
);


DisplayPicker.propTypes = {
  collectionId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object.isRequired,
  setDisplay: PropTypes.func.isRequired,
  setCollection: PropTypes.func.isRequired,
};

export default DisplayPicker;
