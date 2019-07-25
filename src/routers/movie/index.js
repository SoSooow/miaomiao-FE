export default{
    path: '/movie',
    component: ()=> import('@/views/Movie'),
    children: [
        {
            path: '/movie/city',
            component: ()=>import('@/components/City'),
        },
        {
            path: '/movie/nowplaying',
            component: ()=>import('@/components/NowPlaying'),
        },
        {
            path: '/movie/comingsoon',
            component: ()=>import('@/components/ComingSoon'),
        },
        {
            path: '/movie/search',
            component: ()=>import('@/components/Search'),
        },
        {
            path: '/movie',
            redirect: '/movie/nowplaying',
        }
        ],

    }