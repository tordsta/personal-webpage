import React from 'react';
import { Anchor } from 'grommet';
import PropTypes from 'prop-types';

// Import Style
/** @jsx jsx */
import { jsx } from '@emotion/core'


function VerticalNavigationButton(props) {
  return (
    <div
         css={ theme => ({
           flexGrow: '1',
           border: '1px solid gray',
           fontFamily: theme.fontFamily.navigation,
           fontSize: theme.fontSizes.big,
           minHeight: theme.fontSizes.big,
           wordWrap: 'break-word', // word break should never happen, this is a backup
           /* This centers the anchor element in the middle of the div */
           textAlign: 'center',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
         })}
    >
      <Anchor href={props.link.uri}>
        {props.link.name}
      </Anchor>
    </div>
  );
}

VerticalNavigationButton.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
};

export default VerticalNavigationButton;
