import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import VerticalNavigation from './components/VerticalNavigation';

// Import Actions


let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}

// handleling of responsive design goes with breakboints defined in top of application
//the breakpoints are defined by standard device width and by commenly used breakpoints
//the design and interaction is diferent on mobile, need a way to separate them, thats not based on px or vw

const CommonBreakpointsWidth = {
  large: 1690,
  big: 1280,
  medium: 980,
  small: 736,
  tiny: 480,
};

const DeviceMinWidth = {
  desktopBig: 2500,
  desktop: 1900,
  laptop: 1900,
  tablet: 1200,
  mobileBig: 1000,
  mobileSmall: 0,
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
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className={styles.container}>
          {this.props.children}
        </div>
        <VerticalNavigation />
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
