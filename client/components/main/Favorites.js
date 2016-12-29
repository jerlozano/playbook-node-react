import React from 'react'
import PlaybookBlock from './PlaybookBlock'

export default React.createClass({
  render() {
    var rows = [];
    for (var i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].favorite) {
        var key = this.props.data[i]._id + 'fav';
        rows.push(<PlaybookBlock key={key} data={this.props.data[i]} />);
      }
    }

    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
                <h4 className="page-title"><span className="md-stars">Favorites</span></h4>
            </div>
        </div>
        {rows}
      </div>
    )
  }
})
