import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function ButtonAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Workshop', 'Collection', 'Notes', 'Theater'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(124, 45, 18)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wabisabi Project
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerList}
              </Drawer>
            </>
          ) : (
            <>
              <Button color="inherit">Workshop</Button>
              <Button color="inherit">Collection</Button>
              <Button color="inherit">Notes</Button>
              <Button color="inherit">Theater</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function SimpleContainer() {
  return (

    
    <div className="flex items-center bg-blue-200 relative overflow-hidden h-96 m-10 mt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src='https://videos.pexels.com/video-files/5662871/5662871-sd_640_360_25fps.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-10 ml-4 sm:ml-8 md:ml-12 lg:ml-16 drop-shadow-lg">
        Documentary
      </h1>
    </div>
  );
}



export default function MainLayout() {
  return (
    <div sx={{ paddingTop: '64px' }}>
      <ButtonAppBar />
      <SimpleContainer />
    </div>
  );
}
