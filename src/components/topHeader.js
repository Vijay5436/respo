import React from "react";
import logo from "../assets/image/relogo.PNG";
import dp from "../assets/image/dp.PNG";

import {
  AppBar,
  colors,
  Avatar,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createMuiTheme,
  Box,
  Grid,
  makeStyles,
  Button,
  SvgIcon,
  FormControlLabel,
  Checkbox,
  AutoComplete,
  TextField,
  Link,
  IconButton,
  Switch,
  FormGroup,
  Toolbar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//import * as Colors from '@material-ui/styles/colors';

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
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: 0,
    color:'black',
  },
  AppBar: {
      backgroundColor:'white',
  },
  dpname : {
      color :'black',
      marginLeft:'60vw',
      padding:'10px'
  }
}));

export const Top = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Dark" : "Normal"}
        />
      </FormGroup>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="left" />
          <div className=" tagName">
            <Typography variant="h5" className={classes.title}>
              RECMAN
            </Typography>
            <Typography variant="h6" className={classes.title}>
              WHEREHOUSE
            </Typography>
          </div>

          
            <div className={classes.dpname} >
              <span>Welcome</span>
              <br></br>
              <span>Ryan Reynolds</span>
            </div>
            <div >
                <img src={dp} />
            </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};
