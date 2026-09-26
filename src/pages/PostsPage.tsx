import { useState } from "react"
import { useFetchPostsQuery, usePrefetch } from "../store/post/post.api"
import PostCard from "../components/PostCard"

const PostsPage = () => {
    const [page, setPage] = useState(1)
    const [per_page, set_perPage] = useState(10)
    const { data, isLoading } = useFetchPostsQuery({ page, per_page })
    const prefetch = usePrefetch('fetchPost')

    if (isLoading) return <h1>Loading...</h1>
    return (
        <>
            <div className="select_container">
                <select value={page} onChange={e => setPage(Number(e.target.value))} className="select">
                    <option value={1}>Page 1</option>
                    <option value={2}>Page 2</option>
                    <option value={3}>Page 3</option>
                </select>

                <select value={per_page} onChange={e => set_perPage(Number(e.target.value))} className="select">
                    <option value={10}>10 Posts</option>
                    <option value={50}>50 Posts</option>
                    <option value={80}>80 Posts</option>
                </select>
            </div>

            <div className="post_container">
                {data?.map((post) => (
                    <button style={{ background: 'none' }} onMouseEnter={() => prefetch(post.id, { ifOlderThan: 60 })}>
                        <PostCard key={post.id} post={post} />
                    </button>
                ))}
            </div>
        </>
    )
}

export default PostsPage