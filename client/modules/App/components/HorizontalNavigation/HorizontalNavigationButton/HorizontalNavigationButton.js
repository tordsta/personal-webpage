import React from 'react';
import { Anchor } from 'grommet';
import PropTypes from 'prop-types';

// Import Style
import styles from './HorizontalNavigationButton.css';

function VerticalNavigationButton(props) {
  return (
    <div className={styles.anchor}>
      <Anchor href={props.link.uri}>
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
