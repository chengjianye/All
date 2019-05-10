import React, { Component } from 'react';
import axios from 'axios';

class HotList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotList: []
        }
    }
    componentDidMount() {
        axios.get('/FilmList').then(res => {
            this.setState({
                hotList: res.data.FilmList.movieList
            })
        })
    }
    render() {
        const { hotList } = this.state;
        return <div className='filmWrap'>
            {
                hotList.length && hotList.map((item, index) => {
                    const str = item.img;
                    const newStr = str.replace(/\/w\.h/, '')
                    return <dl key={index} onClick={()=>{
                        this.props.api.history.push({
                            pathname:`/hotDetail/${item.id}`
                        })
                    }}>
                        <dt><img src={newStr} alt="" /></dt>
                        <dd>
                            <h3>{item.nm}</h3>
                            <p>观众评分{item.sc}</p>
                            <p>{item.star}</p>
                            <p>{item.showInfo}</p>
                        </dd>
                    </dl>
                })
            }

        </div>
    }
}

export default HotList