import React from 'react';

// Import Style
/** @jsx jsx */
import { jsx } from '@emotion/core'

function WelcomeText() {
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
      <h1
        css={ theme => ({
          fontFamily: theme.fontFamily.headline,
        })}
      >
        Welcome
      </h1>
      <br />
      <br />
      <p>
        My name is Tord Standnes and this my personal web page.<br />
        For the time being, I only use this site to play around with.<br />
        Feel free to look around. <br />
        <br />
        This application is written with the MERN stack.
      </p>
    </div>
  );
}

export default WelcomeText;
