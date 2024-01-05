import { Link } from "react-router-dom";

export function Dish() {
  return (
    <>
        <h1>Dishe</h1>
        <p>Filter</p>
        <p>Dish image</p>
        <p>name</p>
        <p>description</p>
        <p>values table</p>
        <p>Like</p>
        <p>Dislike</p>
        <p><Link to={"/dishes"}>dishes</Link></p>
        <p><Link to={"/"}>dashboard</Link></p>
        <p><Link to={"/main"}>mainpage</Link></p>
    </>
  );
}
