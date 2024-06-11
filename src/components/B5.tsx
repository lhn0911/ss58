import axios from "axios";
import React, { useEffect } from "react";

export function createStudent(newUser: any) {
  useEffect(() => {
    axios
      .post("http://localhost:3000/user", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
}

export default function B5() {
  return <div></div>;
}
