import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent';

class Navigation extends Component  {
    // state = {
    //     login: false,
    // }
    // switchClick = () => {
    //     this.setState({login: !this.state.login})
    // }
    

    render(){
    return (
        <div>
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link onClick={this.guestClick} to="/listing">Listing</Link>
                    </li>
                    <li className="nav-list-item">
                    <Link to="/Login">{this.props.user.username ? null : 'login'}
                        </Link>

                    </li>

                    {this.props.user.loggedIn ? (<li className="nav-list-item">
                    <Link onClick={this.guestClick} to="/AddBusiness">Add Business</Link>
                    </li>):(null)}
                    
                </ul>
            </Toolbar>
        </AppBar>
        {/*  "username" in message is hard coded and needs to be pulled from a value in login.js*/}
    {this.props.user.username ? <SnackbarContent  message="Logged out as:"  /> : 
    <SnackbarContent  message="Logged in as:"  />}
        
    
        
        </div>
    )
}
}

export default Navigation