import { Link } from "react-router-dom";

export function Stats() {
  return (
    <>
        <h1>Achievements</h1>
        <h3>Begginer:</h3>
        <ul>
          <li>
            <p>Kill yourself!</p>
            <p>Description: Kill yourself!</p>
            <p>Status: Locked</p>
          </li>
        </ul>
        <h3>Intermediate:</h3>
        <h3>Expert:</h3>
        <ul>
          <li>
            <p>Get some bitches!</p>
            <p>Description: Impossible</p>
            <p>Status: Locked</p>
          </li>
        </ul>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
