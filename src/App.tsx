import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import PostList from "./components/PostList"
import PostDetail from "./components/PostDetail"
import PostForm from "./components/PostForm"
import { useState } from "react"

export interface Post {
  id: number
  title: string
  author: string
  thumbnail: string
  content: string
  category: string
  date: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Công nghệ AI và tương lai",
      author: "Nguyễn Văn A",
      thumbnail: "https://picsum.photos/300?1",
      content: "Trí tuệ nhân tạo đang thay đổi thế giới nhanh chóng...",
      category: "Công nghệ",
      date: "2025-10-20"
    },
    {
      id: 2,
      title: "Khám phá ẩm thực Nhật Bản",
      author: "Lê Thị B",
      thumbnail: "https://picsum.photos/300?2",
      content: "Ẩm thực Nhật Bản nổi tiếng với sự tinh tế và phong phú...",
      category: "Ẩm thực",
      date: "2025-10-19"
    },
    {
      id: 3,
      title: "Kinh nghiệm du lịch Đà Lạt",
      author: "Phạm Văn C",
      thumbnail: "https://picsum.photos/300?3",
      content: "Đà Lạt luôn là điểm đến hấp dẫn với khí hậu mát mẻ...",
      category: "Du lịch",
      date: "2025-10-18"
    },
    {
      id: 4,
      title: "Cuộc sống xanh giữa lòng thành phố",
      author: "Trần Thị D",
      thumbnail: "https://picsum.photos/300?4",
      content: "Lối sống xanh giúp bảo vệ môi trường và nâng cao sức khỏe...",
      category: "Đời sống",
      date: "2025-10-17"
    },
    {
      id: 5,
      title: "Công nghệ 5G và tác động đến xã hội",
      author: "Ngô Văn E",
      thumbnail: "https://picsum.photos/300?5",
      content: "Mạng 5G đang mở ra nhiều cơ hội mới cho nền kinh tế số...",
      category: "Công nghệ",
      date: "2025-10-16"
    }
  ])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/edit/:id" element={<PostForm posts={posts} setPosts={setPosts} isEdit />} />
      </Routes>
    </>
  )
}

export default App
