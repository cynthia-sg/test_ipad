import React, { Component, PropTypes } from 'react';
// import Image from '../assets/ipad-mini.jpg'

class BoxContent extends Component {
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return { __html: this.props.slide.description };
  }

  render() {
    const { title, thumbnail, description } = this.props.slide;

    return (
      <div className="box-content">
        <div className="box-content-image">
          <img src='/assets/ipad-mini.jpg' />
        </div>
        <div className="box-content-description">
          { title &&
            <h3>{title}</h3>
          }
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
      </div>
    );
  }
}

BoxContent.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default BoxContent;
