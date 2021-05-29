import clsx from "clsx";
import { Link } from 'react-router-dom';
import Drawer from "@material-ui/core/Drawer";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";


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
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
      height: "40%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    drawerListItems: {
      color: "#ECEBE4",
      fontFamily: "Roboto",
    },
    logoutItem: {
      color: "#F4E04D",

    },
  })
);

interface SideBarProps {
  title: string;
}

export default function Sidebar(props: SideBarProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <HiMenu />
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
            <IconContext.Provider value={{ color: "#ECEBE4" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          </IconButton>
        </div>
        <Divider />
        <List className={classes.drawerList}>
          {
          [{title: "Clientes",
            url: '/clients' },
           {title: "Especialistas",
            url: '/specialists'},
            {title: "Atendimentos",
            url: '/appointments'},
             {title: "Prontuários",
            url: '/records'}].map(
            (item, index) => (
             <Link to={item.url}>
              <ListItem button key={item.title}>
                <ListItemText
                  primary={item.title}
                  className={classes.drawerListItems}
                />
              </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary={"Logout"} className={classes.logoutItem} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

// import { SideBarContainer } from "./styles";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Drawer from "@material-ui/core/Drawer";

// const Sidebar: React.FC = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => setOpen(true);

//   const handleDrawerClose = () => setOpen(false);

//   return (
//     <Drawer variant="persistent" anchor="left" open={open}>
//       <SideBarContainer>
//         <div className="menu-icons">
//           <img src="./img/vit_logo.svg" alt="Vitality logo" width="30%" />
//           <img src="./img/menu-button.svg" alt="Menu icon" width="15%" />
//         </div>

//         <div className="menu-links">
//           <hr />
//           <Link to="#">Clientes</Link>
//           <Link to="#">Especialistas</Link>
//           <Link to="#">Atendimentos</Link>
//           <Link to="#">Prontuários</Link>
//           <hr />
//         </div>

//         <div className="logout">
//           <Link to="#">Logout</Link>
//         </div>
//       </SideBarContainer>
//     </Drawer>
//   );
// };

// export default Sidebar;
