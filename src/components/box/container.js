import React, { Component, PropTypes } from 'react';
import BoxTitle from './title';
import BoxContent from './content';
import BoxFooter from './footer';

class BoxContainer extends Component {
  render() {
    const { title, content, activeSlide, collapsed } = this.props;

    return (
      <div className="box">
        <BoxTitle
          title={title || 'No title'}
          collapsed={collapsed}
          changeCollapseOption={this.props.changeCollapseOption} />
        {!collapsed &&
          <div>
            <BoxContent
              slide={content[activeSlide - 1]} />
            <BoxFooter
              activeSlide={activeSlide}
              totalSlides={content.length}
              titlePrevSlide={activeSlide !== 1 ? content[activeSlide - 2].title : ''}
              titleNextSlide={activeSlide !== content.length ? content[activeSlide].title : ''}
              changeActiveSlide={this.props.changeActiveSlide} />
          </div>
        }
      </div>
    );
  }
}

BoxContainer.propTypes = {
  changeActiveSlide: PropTypes.func.isRequired,
  changeCollapseOption: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired,
};

export default BoxContainer;
