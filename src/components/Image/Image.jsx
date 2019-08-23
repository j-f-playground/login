import React, { Component } from 'react';
import { string, object } from 'prop-types';

class Image extends Component {
  static propTypes = {
    source: object,
    imgStyle: string,
    alt: string,
  };
  
  static defaultProps = {
    source: undefined,
    imgStyle: undefined,
    alt: undefined,
  };

  render() {
    const { source, imgStyle, alt } = this.props;

    return (
      <img className={imgStyle} src={source} alt={alt}></img>
    );
  }
}

export default Image;