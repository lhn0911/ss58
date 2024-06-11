import axios from "axios";
import React, { useEffect } from "react";
function getStudentById() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/1")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("khong tim thay ban ghi", err));
  }, []);
}
export default function B3() {
  return <div></div>;
}
