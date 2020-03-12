import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


class AddBusiness extends Component {
    state = {
        name: '',
        description: '',
        address: '', 
        hours: '' 
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newBusiness = { ...this.state }
        newBusiness.id = this.props.newBusiness + 1
        this.props.addBusiness(newBusiness)
        this.props.history.push("/listing")
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                address: '',
                hours: ''
            })
        }
    }

    render() {
        return (
            <div>
            <form 
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
            <TextField 
                id="name" 
                placeholder="Name" 
                value={this.state.name} 
                onChange={this.handleTextChange} 
                required />
            <TextField 
                id="address" 
                placeholder="Address" 
                value={this.state.address} 
                onChange={this.handleTextChange}
                required />
            <TextField 
                id="hours" 
                placeholder="Hours (ex. 8AM - 9PM)" 
                value={this.state.hours} 
                onChange={this.handleTextChange} 
                required />
            <TextField 
                id="description" 
                placeholder="Description" 
                value={this.state.description} 
                onChange={this.handleTextChange} 
                required />
            <br />
                <Button variant="contained" color="primary" type="submit">Add Listing</Button>
            </form>
        </div>
        )
    }
    }
    

export default AddBusiness