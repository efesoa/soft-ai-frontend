import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AuthContext from '../context/AuthContext'
import {Button, Grid, Typography} from "@mui/material";

const drawerWidth = 240;

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>


                        {user ? (
                            <Box sx={{ display: 'flex' }}>
                                <CssBaseline />
                                <Drawer
                                    sx={{
                                        width: drawerWidth,
                                        flexShrink: 0,
                                        '& .MuiDrawer-paper': {
                                            width: drawerWidth,
                                            boxSizing: 'border-box',
                                        },
                                    }}
                                    variant="permanent"
                                    anchor="left"
                                >
                                    <Toolbar />

                                    {user &&
                                        <Typography sx={{ paddingLeft: 7, paddingBottom: 1 }} variant='h6'>
                                            Welcome back! <Typography sx={{ paddingLeft: 4 }} variant='h6'><strong>{user.username}</strong></Typography>
                                        </Typography>
                                    }

                                    <Divider />
                                    <List style={{ textDecoration: 'none' }}>
                                        <Link to='/'  style={{textDecoration: 'none'}}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary={'Dashboard'} sx={{ paddingLeft: 7, color: '#000000' }}/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                        <Link to='/client' style={{textDecoration: 'none'}}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary={'Client'} sx={{ paddingLeft: 7, color: '#000000' }}/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                        <Link to='/employee' style={{textDecoration: 'none'}}>
                                            <ListItem disablePadding>
                                                <ListItemButton >
                                                    <ListItemText primary={'Employee'} sx={{ paddingLeft: 7, color: '#000000' }}/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    </List>
                            <Box sx={{ paddingLeft: 8, paddingTop: 8 }}>
                                <Button onClick={logoutUser} variant="contained" sx={{ width: 100, height: 35 }}>
                                    Logout
                                </Button>
                            </Box>
                                </Drawer>
                            </Box>
                        ): (
                            <Grid container
                                  direction="row"
                                  justifyContent="center"
                                  alignItems="center"
                                  sx={{ paddingTop: 6 }}>
                                <Grid item>
                                    <Typography variant='h4'>Welcome to SoftAI</Typography>
                                </Grid>
                            </Grid>
                        )}

        </div>
    )
}

export default Header
