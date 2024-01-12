import { Link } from "react-router-dom";

export function Friend() {
  return (
    <>
        <h1>Friend</h1>
        <p>Profile picture</p>
        <p>Name</p>
        <p>badges</p>
        <p>banner</p>
        <p>status</p>
        <p>bio</p>
        <p>friends</p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/friends"}>friends list</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
