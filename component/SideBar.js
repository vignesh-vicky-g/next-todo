import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
  } from '@mui/material';
  import React, { useState } from 'react';
  
  import AvTimerIcon from '@mui/icons-material/AvTimer';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';
  import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
  
  export default function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const [graphOpen, setGraphOpen] = React.useState(false);
    const [pageOpen, setPagesOpen] = useState(false);
    const [UIOpen, setUIOpen] = React.useState(false);
    const [tablesOpen, setTablesOpen] = React.useState(false);
    const [ecoOpen, seteEcoOpen] = React.useState(false);
    const [galleryOpen, setGalleryOpen] = React.useState(false);
    const [menu, setMenuOpen] = React.useState(false);
  
    const Dashboard = () => {
      setOpen(!open);
    };
    const Graphs = () => {
      setGraphOpen(!graphOpen);
    };
    const Pages = () => {
      setPagesOpen(!pageOpen);
    };
    const UI = () => {
      setUIOpen(!UIOpen);
    };
    const Tables = () => {
      setTablesOpen(!tablesOpen);
    };
    const Ecommerce = () => {
      seteEcoOpen(!ecoOpen);
    };
    const Gallery = () => {
      setGalleryOpen(!galleryOpen);
    };
    const Menu = () => {
      setMenuOpen(!menu);
    };
  
    return (
      <Box flex={2} color="white">
        <List
          sx={{ maxWidth: 360, bgcolor: '#434946', color: 'white' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={Dashboard}>
            <ListItemIcon>
              <AvTimerIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Dashboard v.1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Dashboard v.2" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Dashboard v.3" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Dashboard v.4" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Dashboard v.5" />
            </ListItemButton>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Layouts" />
          </ListItemButton>
  
          <ListItemButton onClick={Graphs}>
            <ListItemIcon>
              <FamilyRestroomIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Graphs" />
            {graphOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={graphOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Flot Charts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Morris.js Charts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Rickshaw Charts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Charts.js" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Chartist" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="c3 charts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Peity charts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Sparkline Charts" />
            </ListItemButton>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="MailBox" />
          </ListItemButton>
  
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Metrics" />
          </ListItemButton>
  
          <ListItemButton>
            <ListItemIcon>
              <FamilyRestroomIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Widgets" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AppRegistrationOutlinedIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Forms" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AvTimerIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="App views" />
          </ListItemButton>
  
          <ListItemButton onClick={Pages}>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Other Pages" />
            {pageOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={pageOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Search results" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Lockscreen" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Invoice" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="login" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Forget Password" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Register" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="404 Page" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="500 Page" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Empty Page" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton>
            <ListItemIcon>
              <AvTimerIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Miscellaneous" />
          </ListItemButton>
  
          <ListItemButton onClick={UI}>
            <ListItemIcon>
              <FamilyRestroomIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="UI Elements" />
            {UIOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={UIOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Typography" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Icons" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Draggable Panels" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Buttons" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Panels" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Tabs" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Notification & Tooltips" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Helper css classes" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Badges, Labels, Progress" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Grid Option" />
          </ListItemButton>
  
          <ListItemButton onClick={Tables}>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Tables" />
            {tablesOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={tablesOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Static Tables" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Data Tables" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Foo Tables" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="jqGrid" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton onClick={Ecommerce}>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="E-commerce" />
            {ecoOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={ecoOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Products grid" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="products list" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Products edit" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Product detail" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Cart" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Orders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Credit Card form" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton onClick={Gallery}>
            <ListItemIcon>
              <AvTimerIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Gallery" />
            {galleryOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={galleryOpen} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Lightbos Gallery" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Slick Carousel" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Bootstrap Carousel" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton onClick={Menu}>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Menu Levels" />
            {menu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItemButton>
          <Collapse in={menu} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Third level" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary="Second Level Item" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemText primary=" Second Level Item" />
            </ListItemButton>
          </Collapse>
  
          <ListItemButton>
            <ListItemIcon>
              <AvTimerIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="CSS Animations" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Landing Page" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AppRegistrationOutlinedIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Package" />
          </ListItemButton>
        </List>
      </Box>
    );
  }