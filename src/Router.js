import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Login from './containers/Login'
import Business from './containers/Business';
//import AddBusiness from './components/AddBusiness'
import AddBusiness from './containers/AddBusiness'




const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth() === true 
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/login', state:{from: props.location} }} />}
        />
        )
        }


const Router = () => {
    return (
        <Switch>
            <Route path="/listing" component={Listing}/>
            <Route path='/login' component={Login} />
            <Route path= '/business/:id' component={Business}/>
            <ProtectedRoute path= '/AddBusiness' component={AddBusiness}/>
        </Switch>
    );
};

export default Router;
