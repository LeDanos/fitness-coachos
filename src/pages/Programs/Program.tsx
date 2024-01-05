import { Link } from "react-router-dom";

export function Program() {
  return (
    <>
        <h1>Program</h1>
        <p>Name</p>
        <p>Description</p>
        <p>Kys 10x</p>
        <p><Link to={"/programs"}>programs</Link></p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
