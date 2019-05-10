import Index from 'view/index';
import Recom from 'view/index/subpage/recom';
import Toplist from 'view/index/subpage/toplist';
import Search from 'view/index/subpage/search';

const Routes = [{
    path: '/index',
    component: Index,
    name: '首页',
    children: [{
        path: '/index/recom',
        component: Recom,
        name: '推荐',
    }, {
        path: '/index/toplist',
        component: Toplist,
        name: '排行榜',
    }, {
        path: '/index/search',
        component: Search,
        name: '搜索',
    }]
}]

export default Routes