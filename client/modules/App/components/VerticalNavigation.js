import React from 'react';
import PropTypes from 'prop-types';

// Import Style

// Import Component
import VerticalNavigationButton from './VerticalNavigationButton/VerticalNavigationButton';

const links = [
  {
    'name': 'route1',
    'uri': '/',
  },
  {
    'name': 'route2',
    'uri': '/something',
  },
];

function VerticalNavigation(props) {
  return (
    <div className="v-navigation">
      <p>hello from vert nav</p>
      {
        links.map( (link) => (
          <VerticalNavigationButton link={link} key={link.uri} />
          )
        )
      }
    </div>
  );
}


export default VerticalNavigation;
