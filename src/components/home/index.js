import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/contentActions';
import BoxContainer from '../box/container';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BoxContainer
          {...this.props.content}
          changeActiveSlide={this.props.actions.changeActiveSlide}
          changeCollapseOption={this.props.actions.changeCollapseOption}
        />
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    content: state.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
