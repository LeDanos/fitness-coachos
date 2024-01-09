import { Link } from "react-router-dom";

export function Settings() {
  return (
    <>
        <h1>Settings</h1>
        <p>Themes</p>
        <p>Language</p>
        <p>Notifications</p>
        <p>About us</p>
        <p><Link to={"/appreview"}>app review</Link></p>
        <p><Link to={"/policy"}>policy</Link></p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
