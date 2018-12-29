import React from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './VerticalNavigation.css';
import MediaQuery from 'react-responsive';


// Import Component
import VerticalNavigationButton from './VerticalNavigationButton/VerticalNavigationButton';

// this data need to be in redux store, since its to be used by multiple components
const links = [
  {
    'name': 'Home',
    'uri': '/',
    'img': '',
  },
  {
    'name': 'About me',
    'uri': '/aboutme',
    'img': '',
  },
  {
    'name': 'Hire me',
    'uri': '/hireme',
    'img': '',
  },
];

function VerticalNavigation(props) {
  return (
    <div className={styles.verticalNavigation}>
      {links.map( (link) => (
        <VerticalNavigationButton link={link} key={link.uri} />
      ))}
    </div>
  );
}


export default VerticalNavigation;
