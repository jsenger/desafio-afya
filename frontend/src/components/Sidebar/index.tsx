import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import { HiMenu } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

import{ SideBarContainer } from './styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#004AAD",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      color: "#ecebe4",
      backgroundColor: "#004AAD",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "space-between",
    },
    drawerList: {
      backgroundColor: "#004AAD",
      display: "flex",
      height: 400,
      flexDirection: "column",
      justifyContent: "center",
      gap: 20,
    },
    drawerListItems: {
      color: "#ECEBE4",
      fontFamily: "Roboto",
    },
    logoutItem: {
      color: "#F4E04D",
    },
    backdrop: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000000a6",
    },
  })
);

interface SideBarProps {
  title: string;
}

export default function Sidebar(props: SideBarProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <IconContext.Provider value={{ color: "#fff", size: '35px' }}>
            <HiMenu />
            </IconContext.Provider>
          </IconButton>
          {props.title}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <img src="./img/vit_logo.svg" alt="Vitality logo" width="100px" />
          <IconButton onClick={handleDrawerClose}>
            <IconContext.Provider value={{ color: "#fff", size: '35px' }}>
              <IoClose />
            </IconContext.Provider>
          </IconButton>
        </div>
        <Divider />
        <List className={classes.drawerList}>
          {[
            { title: "Dashboard", url: "/dashboard" },
            { title: "Clientes", url: "/clients" },
            { title: "Especialistas", url: "/specialists" },
            { title: "Atendimentos", url: "/appointments" },
            { title: "Prontuários", url: "/records" },
          ].map((item, index) => (
            <Link to={item.url} key={item.title}>
              <ListItem button>
                <ListItemText
                  primary={item.title}
                  className={classes.drawerListItems}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText
              primary={"Logout"}
              className={classes.logoutItem}
              onClick={logout}
            />
            <IconContext.Provider value={{ color: "#F4E04D", size: '2rem'}}>
              <BiLogOut />
            </IconContext.Provider>
          </ListItem>
        </List>
      </Drawer>
      <div
        className={clsx("", {
          [classes.backdrop]: open,
        })}
      ></div>
    </div>
  );
}
