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
        Name: '',
        Description: '',
        Address: '', 
        Hours: '' 
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
                Name: '',
                Description: '',
                Address: '',
                Hours: ''
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
                id="Name" 
                placeholder="Name" 
                value={this.state.Name} 
                onChange={this.handleTextChange} 
                required />
            <TextField 
                id="Address" 
                placeholder="Address" 
                value={this.state.Address} 
                onChange={this.handleTextChange}
                required />
            <TextField 
                id="Hours" 
                placeholder="Hours (ex. 8AM - 9PM)" 
                value={this.state.Hours} 
                onChange={this.handleTextChange} 
                required />
            <TextField 
                id="Description" 
                placeholder="Description" 
                value={this.state.Description} 
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