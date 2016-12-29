import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../containers/Main';
import CreatePlaybookContainer from '../containers/CreatePlaybookContainer';
import EditPlaybookContainer from '../containers/EditPlaybookContainer';
import App from '../layout/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/playbook" component={CreatePlaybookContainer} />
    <Route path="/playbook/:playbookid" component={EditPlaybookContainer} />
  </Route>
)
