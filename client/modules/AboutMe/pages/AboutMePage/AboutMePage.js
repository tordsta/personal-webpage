import React, { Component } from 'react';

// Import Components

// Import Actions

// Import Selectors

// Temp expand to component when there is more sensible stuff here
/** @jsx jsx */
import { jsx } from '@emotion/core'

class AboutMePage extends Component {
  render() {
    return (
      <div
        css={ theme => ({
          fontSize: theme.fontSizes.medium,
          textAlign: 'center',
          fontFamily: theme.fontFamily.standard,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
        <p>
          Hello there!<br />
          I'm a student living in Norway.<br />
          I like chocolate milk and cookies.<br />
        </p>
      </div>
    );
  }
}

export default AboutMePage;
