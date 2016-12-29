import React from "react";
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <header id="topnav">
            <div className="topbar-main">
                <div className="container">
                    <div className="logo">
                        <Link to="/"><span>Playbook</span></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-custom">
                <div className="container">
                  <div id="navigation">
                      <ul className="navigation-menu">
                          <li className="has-submenu active">
                            <Link to="/playbook">Create New Playbook</Link>
                          </li>
                      </ul>
                  </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
});
