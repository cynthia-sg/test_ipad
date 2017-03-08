import React, { Component, PropTypes } from 'react';

class BoxTitle extends Component {
  render() {
    const { title, collapsed } = this.props;

    return (
      <div className="box-title">
        <h1>{title}</h1>
        <button onClick={this.props.changeCollapseOption}>
          <i className={'material-icons' + (collapsed ? ' u-hide' : ' u-show')}>&#xE5C5;</i>
          <i className={'material-icons' + (collapsed ? ' u-show' : ' u-hide')}>&#xE5C7;</i>
        </button>
      </div>
    );
  }
}

BoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  changeCollapseOption: PropTypes.func.isRequired,
};

export default BoxTitle;
