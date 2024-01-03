import { Link } from "react-router-dom";

export function Dishes() {
  return (
    <>
        <h1>Dishes</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
