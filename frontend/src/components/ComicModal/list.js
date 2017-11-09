import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    items: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) =>
          <li>{item.name}</li>
        )}
      </ul>
    )
  }
}