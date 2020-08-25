import {
    Dashboard,
    Login,
    NotFound,
    Setting,
    Edit,
    Article
} from '../Views'

export const mainRouter =  [{
    pathname: '/login',
    component: Login
},{
    pathname: '/404',
    component: NotFound
}]

export const adminRouter =  [{
    pathname: '/admin/dashbord',
    component: Dashboard,
    title:"仪表盘",
    icon:"DashboardOutlined",
    isNav:true
},{
    pathname: '/admin/article',
    component: Article,
    title:"文章管理",
    icon:"unordered-list",
    isNav:true,
    exact: true
},{
    pathname: '/admin/article/edit/:id',
    component: Edit
},{
    pathname: '/admin/setting',
    component: Setting,
    title:"设置",
    icon:"setting",
    isNav:true
}]