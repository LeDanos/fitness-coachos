import { Link } from "react-router-dom";

export function Notifications() {
  return (
    <>
        <h1>Notifications</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
