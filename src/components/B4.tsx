import axios from "axios";

export const removeById = (id: number) => {
  return axios
    .delete(`http://localhost:3000/user/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function B4() {
  return <div></div>;
}
