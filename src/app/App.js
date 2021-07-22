import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Home,
  Motto,
  Project,
  Done,
  Donate,
  Donation,
  Contacts,
} from '../layouts';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/motto' component={Motto} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/done' component={Done} />
      <Route exact path='/donate' component={Donate} />
      <Route exact path='/donation' component={Donation} />
      <Route exact path='/contacts' component={Contacts} />
    </Switch>
  </Router>
);
