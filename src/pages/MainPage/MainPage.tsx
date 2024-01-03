import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <h1>HOnza ma malej pindik</h1>
      <Grid container spacing={2} flexDirection={"column"}>
        <Grid item>
          <Link to={"/dashboard"}>Dash</Link>
        </Grid>
        <Grid item>
        <Link to={"/signin"}>Signin</Link>
        </Grid>
        <Grid item>
        <Link to={"/signup"}>Signup</Link>
        </Grid>
        <Grid item>
        <Link to={"/notes"}>Notes</Link>
        </Grid>
        <Grid item>
        <Link to={"/excersises"}>Excersises</Link>
        </Grid>
        <Grid item>
        <Link to={"/dishes"}>Dishes</Link>
        </Grid>
        <Grid item>
        <Link to={"/programs"}>Programs</Link>
        </Grid>
        <Grid item>
        <Link to={"/stats"}>Stats</Link>
        </Grid>
        <Grid item>
        <Link to={"/friends"}>Friends</Link>
        </Grid>
        <Grid item>
        <Link to={"/notifications"}>Notifications</Link>
        </Grid>
        <Grid item>
        <Link to={"/settings"}>Settings</Link>
        </Grid>
      </Grid>
    </>
  );
}
