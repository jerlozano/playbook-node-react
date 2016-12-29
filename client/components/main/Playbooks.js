import React from 'react'
import PlaybookBlock from './PlaybookBlock'

export default React.createClass({
  render() {
    var rows = [];
    for (var i = 0; i < this.props.data.length; i++) {
      rows.push(<PlaybookBlock key={this.props.data[i]._id} data={this.props.data[i]} />);
    }

    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
                <h4 className="page-title"><span className="md-book">All Playbooks</span></h4>
            </div>
        </div>
        {rows}
      </div>
    )
  }
})
