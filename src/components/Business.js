import React from 'react'
import { Container } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>



const Business = (props) => {
    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)

    const defaultProps = {
        center: {
            lat: Number(business.Latitude),
            lng: Number(business.Longitude),
        },
        zoom: 11
    }

    return (
        <Container maxWidth="sm" className="business-container">
                <h2>{business.Name}</h2>
                <h4>{business.Address}</h4>
                <h4>{business.Hours}</h4>
                <p>{business.Description}</p>
            <Container style={{ height: "400px", width: "450px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent lat={business.Latitude} lng={business.Longitude} text={business.Name} />
                </GoogleMapReact>

            </Container>

        </Container>
    )
}

export default Business