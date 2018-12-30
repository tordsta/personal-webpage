import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './VerticalNavigation.css';


// Import Component
import VerticalNavigationButton from './VerticalNavigationButton/VerticalNavigationButton';

class VerticalNavigation extends Component {

  render() {
    return (
      <div className={styles.verticalNavigation}>
        {this.props.routes.map( (routes) => (
          <VerticalNavigationButton link={routes} key={routes.uri} />
        ))}
      </div>
    );
  }
}

// PropTypes breaks the css for VerticalNavigation
// TODO: find out and fix this bug
VerticalNavigationButton.PropTypes = {
  // routes: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    routes: state.app.routes,
  };
};

export default connect(mapStateToProps)(VerticalNavigation);
