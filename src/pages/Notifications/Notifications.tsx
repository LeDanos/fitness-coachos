import { Link } from "react-router-dom";

export function Notifications() {
  return (
    <>
        <h1>Notifications</h1>
        <ul>
          <li>New alert: Red</li>
          <li>New alert: Spy</li>
          <li>New alert: Base</li>
        </ul>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
