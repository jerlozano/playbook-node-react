import React from 'react';
import { Link } from 'react-router';


export default React.createClass({
    render() {
      var url = "/playbook/" + this.props.data._id;
      return (
        <div className="row">
            <div className="col-sm-6 col-lg-3" >
                <div className="widget-simple-chart text-right card-box">
                    <h3 className="{{p.titlecolor}}"><Link to={url}>{this.props.data.title}</Link></h3>
                    <p className="text-muted text-nowrap">{this.props.data.items.length} Tasks</p>
                </div>
            </div>
        </div>
      )
    }
});
