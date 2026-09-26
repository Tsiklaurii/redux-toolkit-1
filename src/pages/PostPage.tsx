import { useParams } from "react-router-dom"
import { useFetchPostQuery } from "../store/post/post.api"
import type { IPost } from "../interfaces/post.interface"

const PostPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useFetchPostQuery(Number(id))
    const { title, body } = data ? data : ({} as IPost)

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostPage