import Film from 'view/film';
import Cinema from 'view/cinema';
import Mine from 'view/mine';
import HotDetail from 'view/hotDetail';
import HotList from 'view/subpage/hotList'
import ShownSoon from 'view/subpage/shownSoon'

const Route = [{
    path: '/film',
    component: Film,
    name: '电影',
    children: [{
        path: '/film/hotList',
        component: HotList,
        name: '正在上映',
    }, {
        path: '/film/shownSoon',
        component: ShownSoon,
        name: '即将上映',
    }]
}, {
    path: '/cinema',
    component: Cinema,
    name: '影院'
}, {
    path: '/mine',
    component: Mine,
    name: '我的'
},{
    path: '/hotDetail/:id',
    component: HotDetail,
    name: '详情页'
}]

export default Route