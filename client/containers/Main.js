import React from 'react'
import Favorites from '../components/main/Favorites'
import Playbooks from '../components/main/Playbooks';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playbooks: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3200/playbooks')
      .then(res => {
        if (res.data.message.length > 0 ) {
          this.setState({
            playbooks: res.data.message
          });
        }
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Favorites data={this.state.playbooks} />
          <Playbooks data={this.state.playbooks} />
        </div>
      </div>
    )
  }
}
