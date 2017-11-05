import React, { Component } from 'react';
import './Cover.css';
import _ from 'lodash';

export default class Cover extends Component {
    constructor(props) {
      super(props);
      this.state = { image_size: this.imageSize(window.innerWidth), mouseOver: false }
      console.log('construct')
    }

    static propTypes = {
      comicData: React.PropTypes.object.isRequired,
      upVote: React.PropTypes.func.isRequired,
      upVoted: React.PropTypes.bool.isRequired
    }

    handleResize() {
      this.setState({ image_size: this.imageSize(window.innerWidth) });
    }

    handleClick() {
      alert('cluick')
      console.log('click')
      console.log(this)
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }

    imageSize(width) {
      return (width < 768) ? 'portrait_uncanny' : 'portrait_fantastic' ;
    }

    showDetails(show) {
      console.log('hover')
      this.setState({ mouseOver: show })
    }

    coverDate() {
      const date = _.find(this.props.comicData.dates, ['type', 'onsaleDate']);
      return new Date(date.date).getFullYear();
    }

    coverUpvoted() {
      if(!this.props.upVoted) { return null; }

      return (<div className="cover-upvoted">
          <div className="cover-heart-on"></div>
        </div>)
    }

    renderDetail() {
      console.log('render detaul')
      if (!this.state.mouseOver) { return null; }

      return (
        <div className="cover-detail">
          <div className="cover-heart" onClick={ this.props.upVote.bind(this) }></div>
          <div className="cover-footer">
            <div className="cover-title">
              { this.props.comicData.title }
            </div>
            <div>
              <span className="cover-issue"># { 123 }</span>
              <span className="cover-year">{ 1 }</span>
            </div>
          </div>
        </div>
        );
    }

    coverImage() {
      return `${this.props.comicData.thumbnail.path}/${this.state.image_size}.${this.props.comicData.thumbnail.extension}`;
    }

    render() {
      return (
        <div className="pure-u-23-24 pure-u-md-1-4 pure-u-lg-1-5"
          onMouseEnter={ this.showDetails.bind(this, true) }
          onMouseLeave={ this.showDetails.bind(this, false) }>
          <div className="cover">
            <img className="cover-image" alt={ this.props.comicData.title } src={ this.coverImage.call(this) } onClick={this.handleClick}/>
            { this.renderDetail() }
            { this.coverUpvoted() }
          </div>
        </div>
      );
    }
}