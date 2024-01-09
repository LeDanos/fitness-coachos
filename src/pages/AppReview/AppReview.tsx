import { Link } from "react-router-dom";

export function AppReview() {
  return (
    <>
        <h1>App Review</h1>
        <p>Fuck this app it fucking sucks! {'>:('}</p>
        <p><Link to={"/settings"}>settings</Link></p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
