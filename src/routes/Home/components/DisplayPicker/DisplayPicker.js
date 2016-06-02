import React, { PropTypes } from 'react';

import Navigation from './DisplayPickerNavigation';
import Stage from './DisplayPickerStage';
import EmbedCode from 'components/EmbedCode';
import FastInput from 'components/FastInput';


const DisplayPicker = ({ setCollection, collectionId, selected, ...props }) => (
  <div>
    <FastInput
      type="text"
      value={collectionId}
      onChange={setCollection}
    />

    {collectionId?
      <div>
        <Navigation
          selected={selected}
          {...props}
        />

        <Stage
          collectionId={collectionId}
          {...props}
        />

        <EmbedCode
          collectionId={collectionId}
          layoutName={selected.layout}
          {...props}
        />
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
  selected: PropTypes.object.isRequired,
  setCollection: PropTypes.func.isRequired,
};

export default DisplayPicker;
