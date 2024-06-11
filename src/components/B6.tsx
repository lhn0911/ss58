import axios from "axios";
import React, { useEffect } from "react";
function updateStudentById() {
  let updatedStudent = {
    id: 1,
    name: "Hung dep trai",
    email: "hungdeptrai@gmail.com",
    phone: "0127",
    status: "true",
    created_at: "2015-06-06",
  };
  useEffect(() => {
    axios
      .patch("http://localhost:3000/user/1", updatedStudent)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
}
export default function B6() {
  updateStudentById();
  return <div></div>;
}
