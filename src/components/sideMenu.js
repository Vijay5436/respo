import React from "react";
import {
  colors,
  createMuiTheme,
  Box,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: "#FFFFFF",
    },
  },
});
const useStyles = makeStyles((theme) => ({
    root: {
        color:'#ffffff',
        padding:'10px'

    },
  menu: {
    width: "15%",
    backgroundColor: "#00284d",
    height: "100vh",
    float:'left',
  },
}));

export const SideMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemText primary="My Log " />
        </ListItem>
        <ListItem button>
          <ListItemText  primary="File Search" />
        </ListItem>
        <ListItem button>
          <ListItemText  primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemText  primary="Legal Holds" />
        </ListItem>
        <ListItem button>
          <ListItemText  primary="Admin" />
        </ListItem>
      </List>
    </div>
  );
};
