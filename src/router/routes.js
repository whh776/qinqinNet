// 路由懒加载
const Home = () => import(/* webpackChunkName 'group-foo' */ '../pages/home')
const Hot = () => import(/* webpackChunkName 'group-foo' */ '../pages/hot')
const Type = () => import(/* webpackChunkName 'group-foo' */ '../pages/type')
const My = () => import(/* webpackChunkName 'group-foo' */ '../pages/my')
const MyList = () => import(/* webpackChunkName 'group-foo' */ '../pages/my/list')
const MyCollect = () => import(/* webpackChunkName 'group-foo' */ '../pages/my/collect')
const FootPrint = () => import(/* webpackChunkName 'group-foo' */ '../pages/my/footprint')
const Login = () => import(/* webpackChunkName 'group-foo' */ '../pages/my/login')
const Register = () => import(/* webpackChunkName 'group-foo' */ '../pages/my/register')
const Notfound = () => import(/* webpackChunkName 'group-foo' */ '../pages/notfound')
const List = () => import(/* webpackChunkName 'group-foo' */ '../pages/list')
const Detail = () => import(/* webpackChunkName 'group-foo' */ '../pages/detail')
const ShopCar = () => import(/* webpackChunkName 'group-foo' */ '../pages/shopCar')
const Payload = () => import(/* webpackChunkName 'group-foo' */ '../pages/payload')

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/hot',
        name: 'hot',
        component: Hot
    },
    {
        path: '/type',
        name: 'type',
        component: Type,
    },
    {
        path: '/list/:id',//:id 允许/list后面添加参数   路由传参
        name: 'list',
        component: List,
        meta: {
            title: '列表'
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        path: '/my',
        name: 'my',
        component: My,

    },
    {
        path: '/myList',
        name: 'myList',
        component: MyList,
    },
    {
        path: '/shopCar',
        name: 'shopCar',
        component: ShopCar,
    },
    {
        path: '/payload',
        name: 'payload',
        component: Payload,
    },
        {
        path: '/myCollect',
        name: 'myCollect',
        component: MyCollect,
    },
        {
        path: '/footprint',
        name: 'footprint',
        component: FootPrint,
    },
        {
        path: '/login',
        name: 'login',
        component: Login,
    },
        {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '**',
        name: '报错',
        component: Notfound
    },
]