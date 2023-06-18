"use client";

import Grid from "@mui/material/Grid";
import "./Welcome.css";

export default function Welcome() {
  return (
    <Grid>
      <Grid container className="welcome-container">
        <Grid container lg={8} spacing={2}>
          <Grid item lg={8}>
            <div className="welcome-box">
              <h1>Hamad Marhoon</h1>
              <h2>Full Stack Mobile & Web Developer</h2>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="welcome-box"></div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
