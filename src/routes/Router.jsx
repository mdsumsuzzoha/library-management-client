import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Register from "../authentication/Register/Register";
import Login from "../authentication/Login/Login";
import AllBook from "../pages/AllBook/AllBook";
import BooksByCat from "../pages/BooksByCat/BooksByCat";
import BookDetails from "../pages/BookDetails/BookDetails";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import PrivateRoutes from "./PrivateRoutes";
import BookRating from "../pages/BookRatings/BookRatings";
import UpdateBook from "../UpdateBook/UpdateBook";
import AddBook from "../pages/AddBook/AddBook";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBook',
                element: <PrivateRoutes>
                    <AddBook></AddBook>
                </PrivateRoutes>
            },
            {
                path: '/allBook',
                element: <PrivateRoutes>
                    <AllBook></AllBook>
                </PrivateRoutes>
            },
            {
                path: '/bookUpdate/:id',
                element: <PrivateRoutes>
                    <UpdateBook></UpdateBook>
                </PrivateRoutes>
            },
            {
                path: '/booksByCat/:cat',
                element: <BooksByCat></BooksByCat>,
                // loader: ({ params }) => fetch(`https://library-management-server-flame.vercel.app/booksByCat?category=${params.cat}`)
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRoutes>
                    <BookDetails></BookDetails>
                </PrivateRoutes>
            },
            {
                path: '/borrowed',
                element: <PrivateRoutes>
                    <BorrowedBooks></BorrowedBooks>
                </PrivateRoutes>
            },

            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/test',
                element: <BookRating></BookRating>
            },

        ]

    }
]);

export default router;