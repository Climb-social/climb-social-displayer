import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const AppContainer = ({ history, routes, routerKey, store }) => (
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={history} children={routes} key={routerKey} />
    </div>
  </Provider>
);

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  routerKey: PropTypes.number,
  store: PropTypes.object.isRequired,
};

export default AppContainer;
