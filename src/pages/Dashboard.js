import {Grid, Typography} from "@mui/material";

const Dashboard = () => {

    return (
        <div>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item>
                    <Typography variant='h4' sx={{ paddingTop: 5 }}>Dashboard</Typography>
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
