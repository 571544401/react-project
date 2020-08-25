import Loadable from 'react-loadable'
import {Loading} from '../Components'
// import Dashboard from './Dashboard'
// import Login from './Login'
// import NotFound from './NotFound'
// import Setting from './Setting'
// import Article from './Article'
// import Edit from './Article/Edit'

const Dashboard = Loadable({
    loader: () => import('./Dashboard'),
    loading: Loading,
  });

const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})

const Setting = Loadable({
    loader: () => import('./Setting'),
    loading: Loading
})

const Article = Loadable({
    loader: () => import('./Article'),
    loading: Loading
})

const Edit = Loadable({
    loader: () => import('./Article/Edit'),
    loading: Loadable
})

export {
    Dashboard,
    Login,
    NotFound,
    Setting,
    Edit,
    Article
}

