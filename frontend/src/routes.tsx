import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Register from './views/pages/Register';

import PrivateRoutes from './private.routes';

import Dashboard from './views/pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoutes path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;