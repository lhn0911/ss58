import axios from "axios";
import React, { useEffect } from "react";
function getAllStudent() {
  axios
    .get("http://localhost:3000/user")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}
export default function B2() {
  return <div></div>;
}
