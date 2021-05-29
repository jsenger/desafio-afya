import { Route, Redirect } from 'react-router-dom'; 

export const isAuthenticade = () => true;

const PrivateRoute = ({component: Component, ...rest} : any ) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticade() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;