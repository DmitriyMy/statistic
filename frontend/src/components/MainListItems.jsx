import React from 'react';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)"
  }
}));

function MainListItems() {
  const classes = useStyles();
  return (
    <div>
      <List>
        <Link className={classes.link} to="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  )
};

export default MainListItems;
