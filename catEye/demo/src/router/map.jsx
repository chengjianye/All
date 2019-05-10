import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class RouteMap extends Component {
    render() {
        const { route } = this.props
        const defaultRoute = <Route key='0' path='/' render={() => {
            return <Redirect to='/film/hotList' />
        }} exact></Route>
        return <Switch>
            {
                route.length && route.map((item, index) => {
                    if (item.component) {
                        const { children: route, component: Component } = item;
                        return <Route key={index} path={item.path} render={(api) => {
                            return <Component route={route} api={api}></Component>
                        }}>
                        </Route>
                    }
                    return true
                }).concat([defaultRoute])
            }
        </Switch>
    }
}

export default RouteMap