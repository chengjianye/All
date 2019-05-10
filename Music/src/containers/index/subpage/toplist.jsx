import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopList } from 'api/toplist'
import * as actions from 'store/actions'

class Toplist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toplist: []
        }
    }
    componentDidMount() {
        this._getTopList()
    }
    _getTopList() {
        const { updata } = this.props
        getTopList().then((res) => {
            const payload = res.data.toplist.data.topList
            updata(payload)
        })
    }
    render() {
        const { topList } = this.props;
        return <div className='topList_wapper'>
            {
                topList.length && topList.map((item, index) => {
                    return <dl key={index} className='topic_info'>
                        <dt><img src={item.picUrl} alt="" /></dt>
                        <dd>
                            <h3>{item.topTitle}</h3>
                            {
                                item.songList.map((song, index) => {
                                    return <p key={index}><span>{index + 1}</span> {song.songname}</p>
                                })
                            }
                        </dd>
                    </dl>
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.TopListReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        updata(payload) {
            dispatch(actions.update(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toplist)