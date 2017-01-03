import React from 'react'

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete this item: ' + this.props.itemname)) {
      this.props.deleteAction(this.props.id);
    }
  }

  render() {
    return (
      <ol className="dd-list">
          <li className="dd-item dd3-item" data-id="13">
              <div className="dd-handle dd3-handle" onClick={ this.handleDelete }></div>
              <div className="dd3-content">
                { this.props.itemname }
              </div>
          </li>
      </ol>
    )
  }
}
