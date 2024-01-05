import { Link } from "react-router-dom";

export function Excersises() {
  return (
    <>
        <h1>Excersises</h1>
        <ul>
          <li>
            <p>Name</p>
            <p><Link to={"/excersise"}>View</Link></p>
          </li>
        </ul>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
