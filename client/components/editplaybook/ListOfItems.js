import React from 'react'
import Item from './Item'

export default class ListOfItems extends React.Component {
  render() {
    var rows = [];
    if (this.props.items) {
      for (var i = 0; i < this.props.items.length; i++) {
        rows.push(<Item key={this.props.items[i]._id} id={this.props.items[i]._id} itemname={this.props.items[i].name} deleteAction={ this.props.deleteAction } />);
      }
    }
    return (
      <div className="row">
          <div className="col-md-6">
              <div className="card-box">
                  <h4 className="m-t-0 header-title"><b>Items</b></h4>
                  <p className="text-muted m-b-30 font-13">
                      Items added to a playbook
                  </p>

                  <div className="custom-dd-empty dd" id="nestable_list_3">
                    {rows}
                  </div>
              </div>
          </div>
        </div>
    )
  }
}
