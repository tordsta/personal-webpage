import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// Import Style
import styles from './App.css';
import { BrowserView, MobileView } from 'react-device-detect';

// Import Components
import VerticalNavigation from './components/VerticalNavigation/VerticalNavigation';

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

  render() {
    return (
      <div className={styles.app}>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className={styles.navigationVertical}>
          <BrowserView>
            <VerticalNavigation />
          </BrowserView>
        </div>
        <div className={styles.navigationHorizontal}>
          <MobileView >
            <p>mobile navigation is not yet implemented</p>
          </MobileView>
        </div>
        <div className={styles.container}>
          {this.props.children}
        </div>
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
