import React from 'react'
import TitleFavoriteBlock from '../editplaybook/TitleFavoriteBlock'

export default React.createClass({
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <TitleFavoriteBlock createFlag={ true } submitAction={ this.props.createPlaybook }/>
        </div>
      </div>
    )
  }
});
