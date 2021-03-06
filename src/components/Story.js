import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Story.css';

class Story extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className="story">
        <h3>{ this.props.title }</h3>
        <p>{ this.props.text }</p>
      </section>
    );
  }
}

export default Story;
