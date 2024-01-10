import { Link } from "react-router-dom";

export function Excersiseee() {
  return (
    <>
        <h1>Excersise</h1>
        <p>Name</p>
        <p>Description</p>
        <p>Kys</p>
        <p><Link to={"/excersises"}>excersises</Link></p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
