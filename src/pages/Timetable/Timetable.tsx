import { Link } from "react-router-dom";

export function Timetable() {
  return (
    <>
        <h1>Timetable</h1>
        <p>Rozvrh</p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
