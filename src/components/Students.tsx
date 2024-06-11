import React, { useState, useEffect } from "react";
import { removeById } from "./B4";
import { createStudent } from "./B5";

type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

const StudentList: React.FC<{
  students: Student[];
  onDelete: (id: number) => void;
}> = ({ students, onDelete }) => {
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ngày tạo</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

type StudentRowProps = {
  student: Student;
  onDelete: (id: number) => void;
};

const StudentRow: React.FC<StudentRowProps> = ({ student, onDelete }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.created_at}</td>
      <td>
        <button onClick={() => alert(`Editing ${student.name}`)}>✏️</button>
        <button onClick={() => onDelete(student.id)}>🗑️</button>
      </td>
    </tr>
  );
};

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    created_at: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id: number) => {
    removeById(id).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createStudent(newStudent);
    setStudents([...students, newStudent]);
    setNewStudent({
      id: 0,
      name: "",
      email: "",
      phone: "",
      created_at: "",
    });
  };

  return (
    <div className="students">
      <header>
        <h1>Quản lý sinh viên</h1>
        <button onClick={() => alert("Thêm mới sinh viên")}>
          Thêm mới sinh viên
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sinh viên"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          name="phone"
          value={newStudent.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Thêm sinh viên</button>
      </form>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default Students;
