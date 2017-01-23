import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../actions/mainActions';
import Apps from './Apps';

class Container extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Apps {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

function mapDispatchToProps(dispath) {
  return {
    actions: bindActionCreators(mainActions, dispath)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
