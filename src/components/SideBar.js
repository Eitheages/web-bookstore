import React from 'react'
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from "@mui/icons-material/Logout";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import { NavLink } from 'react-router-dom';
import "../css/SideBar.css"

export function SideBar() {
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div className='sidebar'>
      <List
        sx={{
          width: "100%", maxWidth: 360,
          bgcolor: "background.paper"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <NavLink className='to-page-book' to='/books'>
          <ListItemButton>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </NavLink>

        <NavLink className='to-page-cart' to='/cart'>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="My Cart" />
          </ListItemButton>
        </NavLink>

        <NavLink className='to-page-order' to='/orders'>
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="My Orders" />
          </ListItemButton>
        </NavLink>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </div>
  );
}
