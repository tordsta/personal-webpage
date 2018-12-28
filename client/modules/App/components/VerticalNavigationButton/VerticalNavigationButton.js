import React from 'react';
import { Anchor } from 'grommet';
import PropTypes from 'prop-types';

// Import Style
import styles from './VerticalNavigationButton.css';
import MediaQuery from 'react-responsive';

function VerticalNavigationButton(props) {
  return (
    <div>
      <Anchor href={props.link.uri} className={styles.anchor}>
        {props.link.name}
      </Anchor>
    </div>
  );
}

VerticalNavigationButton.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
};

export default VerticalNavigationButton;
