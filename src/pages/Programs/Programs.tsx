import { Link } from "react-router-dom";

export function Programs() {
  return (
    <>
        <h1>Programs</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
