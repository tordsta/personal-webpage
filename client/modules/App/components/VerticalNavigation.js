import React from 'react';
import PropTypes from 'prop-types';

// Import Style

// Import Component
import VerticalNavigationButton from './VerticalNavigationButton/VerticalNavigationButton';

const linkes = [
  {
    "name": "route1",
    "uri": "/"
  },
  {
    "name": "route2",
    "uri": "/"
  },
];

function VerticalNavigation(props) {
  return (
    <div className="v-navigation">
      <p>hello from vert nav</p>
      {
        linkes.map( link => (
          <VerticalNavigationButton linkObj={link} />
          )
        )
      }
    </div>
  );
}


export default VerticalNavigation;
