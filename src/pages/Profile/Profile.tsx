import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
        <h1>Profile</h1>
        <p>Picture</p>
        <p>Status</p>
        <p>Banner</p>
        <p>Name</p>
        <p>Status-text</p>
        <p>Add/Remove Friend</p>
        <p>bio</p>
        <p>Badges</p>
        <p>Stats</p>
        <p>Calkulator</p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
        <p><Link to={"/friends"}>friends</Link></p>
    </>
  );
}
