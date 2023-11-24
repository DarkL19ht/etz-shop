import Category from '@/pages/category'
import { Home } from '@/pages/home'
import Product from '@/pages/product'
import React from 'react'

// export const RouteConfig = () => {
//   return (
//     <div>RouteConfig</div>
//   )
// 

 const routeConfig = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Product />, 
    },
    {
        path: '/category',
        element: <Category />,
    },
]

export default routeConfig