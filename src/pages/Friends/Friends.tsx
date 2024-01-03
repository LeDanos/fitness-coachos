import { Link } from "react-router-dom";

export function Friends() {
  return (
    <>
        <h1>Friends</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
