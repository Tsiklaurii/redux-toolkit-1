import { useNavigate } from "react-router-dom"
import type { IPost } from "../interfaces/post.interface"

interface PostCardProps {
    post: IPost
}

const PostCard = ({ post }: PostCardProps) => {
    const navigate = useNavigate()

    return (
        <div className="post_card" onClick={() => navigate(`/posts/${post.id}`)}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostCard