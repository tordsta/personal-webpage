import React from 'react';
import { Anchor } from 'grommet';
import PropTypes from 'prop-types';
import { Home, CircleInformation, Briefcase } from 'grommet-icons';

// Import Style
import styles from './HorizontalNavigationButton.css';

function VerticalNavigationButton(props) {
  function renderIcon(icon){
    switch (icon) {
      case 'Home':
        return (<Home size="large" />);
      case 'CircleInformation':
        return (<CircleInformation size="large" />);
      case 'Briefcase':
        return (<Briefcase size="large" />);
      default:
        return (props.link.name);
    }
  }

  return (
    <div className={styles.anchor}>
      <Anchor href={props.link.uri}>
        {renderIcon(props.link.icon)}
      </Anchor>
    </div>
  );
}

VerticalNavigationButton.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default VerticalNavigationButton;
