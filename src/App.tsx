import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";

function App() {
  const styles = {
    header: {
      backgroundColor: "#007bff",
      padding: "10px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "15px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      
      padding: "8px 16px",
      borderRadius: "5px",
    },
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  };

  return (
    <Router>
      <div>
        <header style={styles.header}>
          <Link to="/" style={styles.link}>Trang chủ</Link>
          <Link to="/bai1" style={styles.link}>Bài 1</Link>
          <Link to="/bai2" style={styles.link}>Bài 2</Link>
          <Link to="/bai3" style={styles.link}>Bài 3</Link>
        </header>

        <main style={styles.container}>
          <Routes>
            <Route path="/" element={<h2>Thực hành </h2>} />
            <Route path="/bai1/*" element={<Bai1 />} />
            <Route path="/bai2/*" element={<Bai2 />} />
            <Route path="/bai3/*" element={<Bai3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

