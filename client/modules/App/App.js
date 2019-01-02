import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// Import Style
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming';
import styles from './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import theme from '../../components/DefaultTheme';

// Import Components
import VerticalNavigation from './components/VerticalNavigation/VerticalNavigation';
import HorizontalNavigation from './components/HorizontalNavigation/HorizontalNavigation';
import TestComponent from './components/TestComponent';

// Import Actions


let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}

// handling of responsive design happens modularity in the components
// some common break points are defined in top level of application
// npm package react-responsive and react-device-detect is used in components

const CommonBreakpointsWidth = {
  large: 1690,
  big: 1280,
  medium: 980,
  small: 736,
  tiny: 480,
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  // TODO: make a mobile and a browser component, this is to messy

  render() {
    return (
      <div className={styles.app}>
        <ThemeProvider theme={theme}>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}

        {/*Browser navigation and render*/}
        <div className={styles.navigationVertical}>
          <BrowserView>
            <VerticalNavigation />
          </BrowserView>
        </div>
        <div className={styles.containerBrowser}>
          <BrowserView>
            {this.props.children}
          </BrowserView>
        </div>

        {/*Mobile navigation and render*/}
        <div className={styles.navigationHorizontal}>
          <MobileView>
            <HorizontalNavigation />
          </MobileView>
        </div>
        <div className={styles.containerMobile}>
          <MobileView>
            {this.props.children}
          </MobileView>
        </div>
        </ThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

// Retrieve data from store as props
/*
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
*/

export default App;
