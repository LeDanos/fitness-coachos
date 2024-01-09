import { Link } from "react-router-dom";

export function Policy() {
  return (
    <>
        <h1>Privacy Policy</h1>
        <p>Schloopity doopity your data is now my property.</p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
