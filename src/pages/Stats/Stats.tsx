import { Link } from "react-router-dom";

export function Stats() {
  return (
    <>
        <h1>Stats</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
