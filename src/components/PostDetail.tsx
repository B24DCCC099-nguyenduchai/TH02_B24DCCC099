import { useNavigate, useParams, Link } from "react-router-dom";
import { Post } from "../App";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

function PostDetail({ posts, setPosts }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Không tìm thấy bài viết</p>;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này không?")) {
      setPosts(posts.filter((p) => p.id !== post.id));
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>

      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>
        <b>Tác giả:</b> {post.author}
      </p>
      <p>
        <b>Ngày đăng:</b> {post.date}
      </p>
      <p>
        <b>Chuyên mục:</b> {post.category}
      </p>

      <p style={{ marginTop: "10px" }}>{post.content}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to={`/posts/edit/${post.id}`}>
          <button>Sửa</button>
        </Link>

        <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Xóa
        </button>

        <button onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>
          Quay lại
        </button>
      </div>
    </div>
  );
}

export default PostDetail;
