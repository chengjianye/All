import React, { Component } from 'react';
import axios from 'axios';

class Cinema extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cinemaList: []
        }
    }

    componentDidMount() {
        axios.get('/cinemaList').then(res => {
            this.setState({
                cinemaList: res.data.cinemaList.cinemas
            })
        })
    }

    render() {
        const { cinemaList } = this.state
        return <div className='cinema'>
            {
                cinemaList.length && cinemaList.map((item, index) => {
                    return <div className='cinemaList' key={index}>
                        <p>{item.nm}</p>
                        <p><span>{item.addr}</span><span>{item.distance}</span></p>
                        <p><span>小吃</span><span>折扣卡</span></p>
                        <p>{item.promotion.cardPromotionTag}</p>
                    </div>
                })
            }
        </div>
    }
}

export default Cinema