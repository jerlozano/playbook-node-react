import React from 'react'

export default class TitleFavoriteBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      workingTitle: ''
     };

    this.didSwitchParentObject = true; // used for initial, post ajax loading of form values
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  componentDidUpdate() {
    // need to make sure not to handle setting the state from props if creating
    if (this.didSwitchParentObject && !this.props.createFlag)
    {
      this.didSwitchParentObject = false;
      this.setState({
        isChecked: this.props.favorite,
        workingTitle: this.props.title
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var title = this.refs.title.value;
    if (!title || title.length <= 0) {
      alert('TITLE CANNOT BE EMPTY');
      return;
    }
    var data = {
      title: title,
      favorite: document.getElementById('cbox1').checked
    }
    this.props.submitAction(data);
  }

  handleDelete(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete this playbook?')) {
      this.props.deleteAction();
    }
  }

  onCheck() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  onTitleChange() {
    this.setState({
      workingTitle: this.refs.title.value
    });
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-12">
              <div className="card-box">
                  <h4 className="m-t-0 header-title"><b>{ this.props.title }</b></h4>
                  <p className="text-muted m-b-30 font-13">
                      About the playbook
                  </p>
                  <form name="playbookForm" className="form-horizontal" role="form">
                      <div className="form-group">
                          <label className="col-md-1 control-label">Title</label>
                          <div className="col-md-11">
                              <input ref="title" id="titleInput" type="text" className="form-control" value={ this.state.workingTitle } onChange={ this.onTitleChange } />
                          </div>
                      </div>
                      <div className="form-group">
                          <label className="col-md-1 control-label"></label>
                          <div className="col-md-11">
                              <input ref="favorite" type="checkbox" id="cbox1" value="first_checkbox" checked={ this.state.isChecked } onChange={ this.onCheck }/> Mark as a favorite
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-md-1 control-label"></label>
                          <div className="col-md-11">
                              <button className="btn btn-secondary" type="submit" onClick={ this.handleSubmit }>Save</button>
                          </div>
                      </div>
                      <div id="deletePlaybook" className="form-group row" style={{display: this.props.deleteAction ? 'block' : 'none' }}>
                          <label className="col-md-1 control-label"></label>
                          <div className="col-md-11">
                              <button className="btn btn-secondary" type="submit" onClick={ this.handleDelete }>Delete</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}
