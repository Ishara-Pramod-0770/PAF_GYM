import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, Grid } from '@mui/material';
import avatar from "./avatar.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { navigationMenu } from '../Navigation/NavigationMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "./logo.png";

const drawerWidth = 280;

export default function CustomDrawer() {
    const [userName, setUserName] = useState("isharaPramod");
    const [firstName, setFirstName] = useState("Ishara");
    const [lastName, setLastName] = useState("Pramod");
    const location = useLocation();
    const navigate = useNavigate();

    return (
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
                <Divider />
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <div style={{ padding: 10 }}>
                            <img
                                src={logo}
                                style={{ width: 80, height: 80, borderRadius: 70 }}
                                alt="Logo"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" sx={{ marginTop: 4 }}> <b>FITNESS APP</b></Typography>
                    </Grid>
                </Grid>

                <List>
                    {navigationMenu.map((item) => (
                        <ListItem
                            key={item.title}
                            sx={{
                              color: location.pathname.startsWith(item.path) ? 'black' : 'inherit',
                              backgroundColor: location.pathname.startsWith(item.path) ? 'lightgrey' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() =>
                                item.title === "Profile"
                                    ? navigate(`/profile/${5}`)
                                    : navigate(item.path)
                            }>
                                <ListItemIcon sx={{ color: 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'inherit' }}>{item.title.toUpperCase()}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <div style={{ padding: 10, marginLeft: 25 }}>
                    <Button variant='contained' color="primary">CLICK ME</Button>
                </div><br />
                <Divider />
                <Grid container spacing={5} sx={{ padding: 2 }}>
                    <Grid item xs={2}>
                        <Avatar alt="username" src={avatar} />
                    </Grid>
                    <Grid item xs={10}>
                        <span>{firstName} {lastName}</span><br />
                        <span className="opacity-70">@{userName}</span>
                    </Grid>
                </Grid>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            // Handle logout
                        }}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Log Out" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
