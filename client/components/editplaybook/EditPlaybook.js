import React from 'react'
import TitleFavoriteBlock from './TitleFavoriteBlock'
import ListOfItems from './ListOfItems'
import AddItem from './AddItem'

export default class EditPlaybook extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <TitleFavoriteBlock title={ this.props.title } submitAction={ this.props.updatePlaybook } favorite={ this.props.favorite } deleteAction={ this.props.deletePlaybook }/>
              <ListOfItems items={ this.props.items } />
              <AddItem title={ this.props.title } submitAction={ this.props.addItem }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
