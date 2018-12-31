import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './HorizontalNavigation.css';

// Import Component
import HorizontalNavigationButton from './HorizontalNavigationButton/HorizontalNavigationButton';

class HorizontalNavigation extends Component {

  render() {
    return (
      <div>
        <div className={styles.horizontalNavigation}>
          {this.props.routes.map( (routes) => (
            <HorizontalNavigationButton link={routes} key={routes.uri} />
          ))}
        </div>
        <div className={styles.spacer} />
      </div>
    );
  }
}

// PropTypes breaks the css forHorizontalNavigation
// TODO: find out and fix this bug
HorizontalNavigationButton.PropTypes = {
  // routes: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    routes: state.app.routes,
  };
};

export default connect(mapStateToProps)(HorizontalNavigation);
