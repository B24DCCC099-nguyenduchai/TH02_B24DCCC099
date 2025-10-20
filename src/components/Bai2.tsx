import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div>
      <h3>Chi tiết sinh viên</h3>
      <p><b>Tên:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
    </div>
  );
}

function Bai2() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/bai2/${s.id}`}>{s.name}</Link> - {s.email}
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}

export default Bai2;
