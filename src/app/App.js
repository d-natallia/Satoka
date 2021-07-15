import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Motto, Project } from '../layouts';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/motto' component={Motto} />
      <Route exact path='/project' component={Project} />
    </Switch>
  </Router>
);
