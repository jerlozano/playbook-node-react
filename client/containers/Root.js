import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {
  // static propTypes = {
  //   history: PropTypes.object.isRequired,
  //   routes: PropTypes.element.isRequired,
  //   store: PropTypes.object.isRequired,
  // };

  get content() {
    return (
      // <Router history={this.props.history}>
      <Router>
        {this.props.routes}
      </Router>
    );
  }

  // componentDidMount() {
  //   require('bootstrap/dist/css/bootstrap.css');
  //   require('../sass/main.scss');
  // }

  render() {
    return (
      // <Provider store={this.props.store}>
      //   {this.content}
      // </Provider>
    );
  }
}
