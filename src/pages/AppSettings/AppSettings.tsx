import { Link } from "react-router-dom";

export function Settings() {
  return (
    <>
        <h1>Settings</h1>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
