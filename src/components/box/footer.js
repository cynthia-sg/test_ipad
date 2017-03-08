import React, { Component, PropTypes } from 'react';

class BoxFooter extends Component {
  constructor(props) {
    super(props);
    this.goPrevSlide = this.goPrevSlide.bind(this);
    this.goNextSlide = this.goNextSlide.bind(this);
  }

  goPrevSlide() {
    this.props.changeActiveSlide(this.props.activeSlide - 1);
  }

  goNextSlide() {
    this.props.changeActiveSlide(this.props.activeSlide + 1);
  }

  render() {
    const { activeSlide, totalSlides, titlePrevSlide, titleNextSlide } = this.props;

    return (
      <div className="box-footer">
        <div className="box-footer-cell">
          {/* Previous slide */}
          <button disabled={activeSlide === 1 ? 'disabled' : false} onClick={this.goPrevSlide}>
            <i className="material-icons">&#xE408;</i> <span>{ titlePrevSlide }</span>
          </button>
        </div>
        <div className="box-footer-cell">
          {/* Next slide */}
          <button disabled={activeSlide === totalSlides ? 'disabled' : false} onClick={this.goNextSlide}>
            <span>{ titleNextSlide }</span> <i className="material-icons">&#xE409;</i>
          </button>
        </div>
      </div>
    );
  }
}

BoxFooter.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  changeActiveSlide: PropTypes.func.isRequired,
  titlePrevSlide: PropTypes.string,
  titleNextSlide: PropTypes.string,
};

export default BoxFooter;
