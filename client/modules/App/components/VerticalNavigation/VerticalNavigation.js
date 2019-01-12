import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './VerticalNavigation.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

// Import Component
import VerticalNavigationButton from './VerticalNavigationButton/VerticalNavigationButton';

class VerticalNavigation extends Component {

  render() {
    return (
      <div css={ theme => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '20vw',
        minWidth: '180px',
        maxWidth: '300px',
        height: '100vh',
        minHeight: '200px',
        backgroundColor: '#DADADA',
      })}
      >
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
