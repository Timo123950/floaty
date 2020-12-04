import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Floaty } from '../../icons/floaty.svg';
import './style.scss';

class EmptyPage extends React.Component {
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onUrl(e.target.value);
    }
  };

  render() {
    return (
      <div className='empty-page'>
        <Floaty/>
        <h1>Floaty</h1>
        <p>Enter the URL below to get started</p>
        <input type="text" placeholder="Enter a URL you would like to see" onKeyPress={ this.onKeyPress } autoFocus/>
      </div>
    );
  }
}

EmptyPage.propTypes = {
  onUrl: PropTypes.func.isRequired
};

export default EmptyPage;
