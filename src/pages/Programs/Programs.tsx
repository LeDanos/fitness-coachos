import { Link } from "react-router-dom";

export function Programs() {
  return (
    <>
        <h1>Programs</h1>
        <p>Beginner | Intermediate | Expert</p>
        <h3>Begginer</h3>
        <ul>
          <li>
            <p>Name</p>
            <p>145 Likes | 794 Dislikes</p>
            <Link to={"/program"}>View</Link>
          </li>
        </ul>
        <h3>Intermediate</h3>
          <li>
            <p>Name</p>
            <p>145 Likes | 794 Dislikes</p>
            <Link to={"/program"}>View</Link>
          </li>
        <h3>Expert</h3>
          <li>
            <p>Name</p>
            <p>145 Likes | 794 Dislikes</p>
            <Link to={"/program"}>View</Link>
          </li>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
