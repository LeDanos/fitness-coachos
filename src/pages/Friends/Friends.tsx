import { Link } from "react-router-dom";

export function Friends() {
  return (
    <>
        <h1>Friends</h1>
        <input type="text" placeholder="Hledat přátele"/>
        <button>Vyhledat</button>
        <ul>
          <li>
            <p>Icon</p>
            <p>No friends L</p>
            <Link to={"/friend"}><p>Přejít</p></Link>
          </li>
        </ul>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
