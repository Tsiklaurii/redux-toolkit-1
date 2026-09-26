import { Route, Routes } from "react-router-dom"
import PostsPage from "../pages/PostsPage"
import PostPage from "../pages/PostPage"
import HomePage from "../pages/HomePage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="posts">
                <Route index element={<PostsPage />} />
                <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default AppRouter