import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Post } from "../App"

interface Props {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  isEdit?: boolean
}

function PostForm({ posts, setPosts, isEdit }: Props) {
  const navigate = useNavigate()
  const { id } = useParams()
  const editingPost = posts.find(p => p.id === Number(id))

  const [form, setForm] = useState({
    title: "",
    author: "",
    thumbnail: "",
    content: "",
    category: ""
  })

  useEffect(() => {
    if (isEdit && editingPost) {
      setForm({
        title: editingPost.title,
        author: editingPost.author,
        thumbnail: editingPost.thumbnail,
        content: editingPost.content,
        category: editingPost.category
      })
    }
  }, [isEdit, editingPost])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEdit && editingPost) {
      const updatedPosts = posts.map(p => p.id === editingPost.id ? { ...p, ...form } : p)
      setPosts(updatedPosts)
      alert("Cập nhật thành công!")
      navigate(`/posts/${editingPost.id}`)
    } else {
      const newPost: Post = {
        id: posts.length + 1,
        date: new Date().toISOString().split("T")[0],
        ...form
      }
      setPosts([...posts, newPost])
      alert("Đăng bài thành công!")
      navigate("/")
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{isEdit ? "Chỉnh sửa bài viết" : "Đăng bài viết mới"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "400px" }}>
        <input name="title" placeholder="Tiêu đề" value={form.title} onChange={handleChange} required />
        <input name="author" placeholder="Tác giả" value={form.author} onChange={handleChange} required />
        <input name="thumbnail" placeholder="URL ảnh" value={form.thumbnail} onChange={handleChange} required />
        <input name="category" placeholder="Chuyên mục (ghi gì cũng được)" value={form.category} onChange={handleChange} required />
        <textarea name="content" placeholder="Nội dung" value={form.content} onChange={handleChange} required rows={10} />
        <button type="submit">{isEdit ? "Cập nhật" : "Đăng bài"}</button>
      </form>
    </div>
  )
}

export default PostForm

