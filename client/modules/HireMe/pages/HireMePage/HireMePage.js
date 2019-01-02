import React, { Component } from 'react';

// Import Components

// Import Actions

// Import Selectors

// Temp expand to component when there is more sensible stuff here
/** @jsx jsx */
import { jsx } from '@emotion/core'

class HireMePage extends Component {
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
          If you want to offer me a job, contact me at<br />
          tord.standnes@gmail.com<br />
          <br />
          For more information about me visit my Linkedin Profile<br />
          <a href={'https://www.linkedin.com/in/tord-standnes/'}>Linkedin Profile</a>
        </p>
      </div>
    );
  }
}


export default HireMePage;
