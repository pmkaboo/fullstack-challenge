import React, { Component } from 'react';
import Gallery from './gallery.js'
import List from './list.js'

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  render() {
    let content = null;
    if (this.props.text) { content = <p>{this.props.text}</p> }
    if (this.props.items) { content = <List items = {this.props.items} /> }
    if (this.props.images) { content = <Gallery images = {this.props.images} /> }

    return (
      <div>
        <h4>{this.props.title}</h4>
        {content}
        {!this.props.last && <hr />}
      </div>
    )
  }
}