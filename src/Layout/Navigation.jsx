import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function NavigationPanel() {
    const sideBar = 'left';
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(isOpen);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                XYZ Formulas
            </Typography>
            <Divider />
            <List>
                <ListItem key={'x'} disablePadding>
                    <ListItemButton component={RouterLink} to={'/'}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Basic Calculator'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'y'} disablePadding>
                    <ListItemButton component={RouterLink} to={'/temp'}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'GO TO TEMP PAGE'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'a'} disablePadding>
                    <ListItemButton component={RouterLink} to={'/'}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Got to HOME PAGE'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ABC Formulas
            </Typography>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={sideBar}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Swiss-knife Calculator
                            </Typography>
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                {list()}
                            </Drawer>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                >
                                    by Tim Kosarev
                                </Typography>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </React.Fragment>
        </div>
    );
}
