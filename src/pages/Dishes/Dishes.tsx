import { Link } from "react-router-dom";

export function Dishes() {
  return (
    <>
        <h1>Dishes</h1>
        <p>Filter</p>
        <ul>
          <li>
            <p>Dish image</p>
            <p>name</p>
            <p><Link to={"/dish"}>View</Link></p>
          </li>
        </ul>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
