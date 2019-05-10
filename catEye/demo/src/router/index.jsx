import React, { Component } from 'react';
import RouteMap from './map';
import Route from './route';

class RouteView extends Component {
    render() {
        const route = this.props.route ? this.props.route : Route
        return <RouteMap route={route} />
    }
}

export default RouteView