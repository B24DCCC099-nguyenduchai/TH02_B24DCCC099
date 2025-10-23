import { Link } from "react-router-dom"
import { Post } from "../App"

interface Props {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

function PostList({ posts }: Props) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách bài viết</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", borderRadius: "8px", width: "300px", background: "white" }}>
            <img src={post.thumbnail} alt={post.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
            <div style={{ padding: "10px" }}>
              <h3>{post.title}</h3>
              <p><b>Tác giả:</b> {post.author}</p>
              <p><b>Ngày:</b> {post.date}</p>
              <p><b>Chuyên mục:</b> {post.category}</p>
              <Link to={`/posts/${post.id}`}><button style={{ marginTop: "10px" }}>Xem chi tiết</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
