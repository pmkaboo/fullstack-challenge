import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import './ComicModal.css';
import Section from './section.js'

export default class ComicModal extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: React.PropTypes.object.isRequired,
    show: React.PropTypes.bool.isRequired,
    close: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Section
            title = 'Variant Description'
            text = {this.props.data.variantDescription}
          />
          <Section
            title = 'ISBN'
            text = {this.props.data.isbn}
          />
          <Section
            title = 'Characters'
            items = { this.props.data.characters.items }
          />
          <Section
            title = 'Gallery'
            images = { this.props.data.images }
          />
          <Section
            title = 'Creators'
            items = { this.props.data.creators.items }
            last = { true }
          />
        </Modal.Body>
      </Modal>
    )
  }
}