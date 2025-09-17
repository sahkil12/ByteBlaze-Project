import Root from './../Root/Root';
import ErrorPage from './../ErrorPage/ErrorPage';
import Home from './../Home';
import Blogs from './../Blogs/Blogs';
import Blog from './../pages/Blog';
import Bookmarks from './../Bookmarks/Bookmarks';
import { createBrowserRouter } from 'react-router-dom';
import Content from '../Nested-Components/Content';
import Author from '../Nested-Components/Author';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader:()=> fetch("https://dev.to/api/articles?per_page=20&top=7")
      },
      {
        path:"/blog/:id",
        element:<Blog></Blog>,
        loader: ({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
        children:[
            {
                index: true,
                element:<Content></Content>,
                 loader: ({params})=>fetch(`https://dev.to/api/articles/${params?.id}`)
            },
            {
                path: 'author',
                element:<Author></Author>,
                 loader: ({params})=>fetch(`https://dev.to/api/articles/${params?.id}`)
            }
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);