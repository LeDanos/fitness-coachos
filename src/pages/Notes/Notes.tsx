import { Link } from "react-router-dom";

export function Notes() {
  return (
    <>
        <h1>Notes</h1>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
