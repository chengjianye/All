import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteView from 'router'
class Film extends Component {
    render() {
        const { route } = this.props
        return <div className='filmWrap'>
            <div className='tabReceived'>
                <ul>
                    <li><Link to='/film/hotList'>正在热映</Link></li>
                    <li><Link to='/film/shownSoon'>即将上映</Link></li>
                </ul>
            </div>
            <RouteView route = {route}/>

        </div>
    }
}

export default Film