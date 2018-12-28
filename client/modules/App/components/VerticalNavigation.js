import React from 'react';
import PropTypes from 'prop-types';

// Import Style
import MediaQuery from 'react-responsive';

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
      <MediaQuery query='(min-width: 2500px)'>
        <p>big desktop</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 1900px)'>
        <p>desktop and laptop</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 1200px)'>
        <p>tablet</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 1000px)'>
        <p>mobile big</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 0px)'>
        <p>mobile small</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 1690px)'>
        <p>large</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 1280px)'>
        <p>big</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 980px)'>
        <p>medium</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 736px)'>
        <p>small</p>
      </MediaQuery>
      <MediaQuery query='(min-width: 480px)'>
        <p>tiny</p>
      </MediaQuery>
      {links.map( (link) => (
          <VerticalNavigationButton link={link} key={link.uri} />
      ))}
    </div>
  );
}


export default VerticalNavigation;
