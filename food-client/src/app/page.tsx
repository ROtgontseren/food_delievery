import {Grid, Button, Typography, collapseClasses} from "@mui/material";

export default function Home() {
  return (
    <main>
      <Grid container gap={6} >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" fontSize={36}>Welcome Mui framework</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="secondary">Click Here</Button>
          </Grid>
      </Grid>
    </main>
  )
}

// sx={{background:"teal"}}