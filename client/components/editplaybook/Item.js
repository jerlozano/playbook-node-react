import React from 'react'

export default class Item extends React.Component {
  render() {
    return (
      <ol className="dd-list">
          <li className="dd-item dd3-item" data-id="13">
              <div className="dd-handle dd3-handle"></div>
              <div className="dd3-content">
                { this.props.itemname }
              </div>
          </li>
      </ol>
    )
  }
}
