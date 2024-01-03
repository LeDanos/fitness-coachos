import { Link } from "react-router-dom";

export function Settings() {
  return (
    <>
        <h1>Settings</h1>
        <p><Link to={"/dashboard"}>dashboard</Link></p>
        <p><Link to={"/"}>mainpage</Link></p>
    </>
  );
}
