import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    images: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className='gallery'>
        {this.props.images.map((image) =>
          <img src={image.path + '.' + image.extension} />
        )}
      </div>
    )
  }
}