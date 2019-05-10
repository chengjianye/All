import React, { Component } from 'react';
import axios from 'axios';

class HotDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailList: []
        }
    }
    componentDidMount() {
        axios.get('/getDetail',{
            params:{
                id:this.props.api.match.params.id
            }
        }).then(res => {
            this.setState({
                detailList: res.data.getDetial.detailMovie
            })
        })
    }
    render() {
        const { detailList } = this.state;
        console.log(detailList)
        const str = detailList.img;
        let newStr = '';
        if (str) {
            newStr = str.replace(/\/w\.h/, '');
        }
        return <div className='hotDetailWrapper'>
            {
                <div className='TopList'>
                    <dl>
                        <dt><img src={newStr} alt="" /></dt>
                        <dd>
                            <h3>{detailList.nm}</h3>
                            <p>{detailList.cat}</p>
                            <p>{detailList.fra}</p>
                            <p>{detailList.src}</p>
                            <p>{detailList.pubDesc}</p>
                        </dd>
                    </dl>
                </div>
            }
        </div>
    }
}

export default HotDetail

