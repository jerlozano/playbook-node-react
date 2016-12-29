import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';

export default React.createClass({
  render() {
    var childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, { props: this.props }));
    return (
      <div>
        <Header />
        { childrenWithProps }
        <Footer />
      </div>
    );
  }
});
