import { Route, Routes } from "react-router-dom"
import PostsPage from "../pages/PostsPage"
import PostPage from "../pages/PostPage"
import HomePage from "../pages/HomePage"
import RandomProductsPage from "../pages/RandomProductsPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="posts">
                <Route index element={<PostsPage />} />
                <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/random-products" element={<RandomProductsPage />} />
        </Routes>
    )
}

export default AppRouter
