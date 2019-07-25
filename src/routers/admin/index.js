export default{
    path: '/admin',
    component: ()=> import('@/views/Admin'),
    children: [
        {
            path: 'users',
            component: ()=> import('@/views/Admin/users.vue'),
        },
        {
            path: 'movies',
            component: ()=> import('@/views/Admin/movies.vue'),
        },
        {
            path: 'cinemas',
            component: ()=> import('@/views/Admin/cinemas.vue'),
        },
        {
            path: '/admin',
            redirect: '/admin/users',
        }
    ],
}