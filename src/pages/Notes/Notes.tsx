import { Link } from "react-router-dom";

export function Notes() {
  return (
    <>
        <h1>Notes</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
