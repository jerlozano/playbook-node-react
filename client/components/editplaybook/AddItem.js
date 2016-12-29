import React from 'react'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workingItemName: ''
     };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onItemNameChange = this.onItemNameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.refs.itemname.value);
    this.setState({
      workingItemName: ''
    });
  }

  onItemNameChange() {
    this.setState({
      workingItemName: this.refs.itemname.value
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card-box">
            <h4 className="m-t-0 header-title"><b>Create Item</b></h4>
            <p className="text-muted m-b-30 font-13">
                Create or edit a new item
            </p>

            <form className="form-horizontal" role="form" name="ItemForm">
                <div className="form-group">
                    <label className="col-md-2 control-label">Name</label>
                    <div className="col-md-10">
                        <input ref="itemname" type="text" className="form-control" onChange={ this.onItemNameChange } value={ this.state.workingItemName }/><br />
                        <button className="btn btn-secondary" type="submit" onClick={ this.handleSubmit }>Add Item</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    )
  }
}
