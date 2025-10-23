import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#007bff", padding: "10px", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Trang chủ</Link>
      <Link to="/create" style={{ color: "white" }}>Đăng bài</Link>
    </nav>
  )
}

export default Navbar
