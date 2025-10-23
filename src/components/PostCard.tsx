import { Post } from "../App"
import { useNavigate } from "react-router-dom"

interface Props {
  post: Post
  onDelete: (id: number) => void
}

function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate()
  return (
    <div style={{ background: "white", padding: "15px", borderRadius: "8px" }}>
      <img src={post.thumbnail} alt={post.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{post.title}</h3>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
      <button onClick={() => onDelete(post.id)}>Xóa</button>
    </div>
  )
}

export default PostCard
