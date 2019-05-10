import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class Recom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CarouselImg: [
                'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121479.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1123020.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1122653.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1120772.jpg?max_age=2592000'
            ]
        }
    }
    render() {
        const { CarouselImg } = this.state;
        return <div>
            <Carousel autoplay>
                {
                    CarouselImg.length && CarouselImg.map((item, index) => {
                        return <div key={index}><h3><img src={item} alt="" /></h3></div>
                    })
                }
            </Carousel>

            <div className='radio'>电台</div>
            <div className='radio_wrapper'>
                <dl>
                    <dt>
                        <img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" />
                    </dt>
                    <dd>
                        热歌
                     </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000" alt="" />
                    </dt>
                    <dd>
                        一首招牌歌
                     </dd>
                </dl>
            </div>
            <div className='radio'>热门歌单</div>
        </div>
    }
}

export default Recom