import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import isAuthenticated from "./services/auth";

import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";

import PrivateRoute from "./private.routes";

import Dashboard from "./views/pages/Dashboard";
import Clients from "./views/pages/Clients";
import Specialists from "./views/pages/Specialists";
import Charts from "./views/pages/Charts";
import Appointments from "./views/pages/Appointments";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login">
          {isAuthenticated() ? <Redirect to="/dashboard" /> : <Login />}
        </Route>

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/clients" component={Clients} />
        <PrivateRoute path="/specialists" component={Specialists} />
        <PrivateRoute path="/charts" component={Charts} />
        <PrivateRoute path="/appointments" component={Appointments} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
