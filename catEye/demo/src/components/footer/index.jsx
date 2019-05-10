import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return <footer>
            <ul>
                <li><Link to='/film'>电影</Link></li>
                <li><Link to='/cinema'>影院</Link></li>
                <li><Link to='/mine'>我的</Link></li>
            </ul>
        </footer>
    }
}

export default Footer