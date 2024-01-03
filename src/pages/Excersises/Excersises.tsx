import { Link } from "react-router-dom";

export function Excersises() {
  return (
    <>
        <h1>Excersises</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
