import React from 'react'
import EditPlaybook from '../components/editplaybook/EditPlaybook'

export default class EditPlaybookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playbook: {}
    };
    this.addItem = this.addItem.bind(this);
    this.updatePlaybook = this.updatePlaybook.bind(this);
  }

  // function to add item to a playbook, gets passed down to additem component
  addItem(itemname) {
    // hackish approach to use the outer scoped this within the axios callback
    var itemThis = this;
    axios.post('http://localhost:3200/playbookitems', {
      name: itemname,
      pbid: this.props.params.playbookid
    })
    .then(function (response) {
      var items = response.data.message;
      if (items) {
        var updatedPlaybook = itemThis.state.playbook;
        updatedPlaybook.items = items;
        itemThis.setState({
          playbook: updatedPlaybook
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // function to update playbook, gets passed down to titlefavoriteblock component
  updatePlaybook(data) {
    axios.put('http://localhost:3200/playbooks/' + this.props.params.playbookid, {
      title: data.title,
      favorite: data.favorite
    })
    .then(function (response) {
      window.location.href = 'http://localhost:8080/';
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3200/playbooks/' + this.props.params.playbookid)
      .then(res => {
        this.setState({
          playbook: res.data.message
        });
      });
  }

  render() {
    return (
      <div>
        <EditPlaybook title={ this.state.playbook.title } favorite={ this.state.playbook.favorite } items={ this.state.playbook.items }
          addItem={ this.addItem } updatePlaybook={ this.updatePlaybook }/>
      </div>
    )
  }
}