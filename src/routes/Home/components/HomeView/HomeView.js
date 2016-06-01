import React from 'react';
// import classes from './HomeView.scss';

import DisplayPickerContainer from '../../containers/DisplayPickerContainer';

export const HomeView = () => (
  <div>
    <h1>Publish this Collection</h1>
    <p>Pick a style. Get your embed code.</p>

    <DisplayPickerContainer />

    <div>
      <p>HowToGuideBlock</p>
    </div>
  </div>
);

export default HomeView;
