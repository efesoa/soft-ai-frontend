import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Box, Button, Grid, TextField, Typography} from "@mui/material";


const Login = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: 7 }}
            >
                <Box boxShadow={7} sx={{ p:2, minWidth: 150 }} borderRadius={5}>
                    <form onSubmit={loginUser}>
                        <Grid container
                              direction="column"
                              sx={{ py: 2 }}
                        >
                            <Grid item sx={{ paddingBottom: 2, paddingLeft: 10 }}>
                                <Typography variant='h5'><strong>Log In</strong></Typography>
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField label="Username" variant="outlined" type="text" name="username" placeholder="Enter your username" />
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField label="Password" variant="outlined" type="password" name="password" placeholder="Enter your password" />
                            </Grid>
                            <Grid item sx={{ paddingLeft: 10 }}>
                                <Button type="submit" variant="contained">Login</Button>
                            </Grid>
                        </Grid>

                    </form>
                </Box>
            </Grid>
        </div>
    )
}

export default Login
