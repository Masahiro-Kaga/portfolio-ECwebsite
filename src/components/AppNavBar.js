import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

const AppNavBar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, unsetUser, setUser } = React.useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    handleCloseNavMenu();
    unsetUser();
    setUser({
      id: null,
      isAdmin: null,
    });
  };
  
  return (
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            as={Link}
            to="/"
            style={{ textDecoration: "none", color: "yellow" }}
          >
            MasaZON
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {user.id && user.isAdmin ? (
              ""
            ) : (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                <HomeIcon>
                  <AdminPanelSettingsIcon fontSize="small" />
                </HomeIcon>
                <Typography noWrap className="mx-2">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/register"
              >
                <AppRegistrationIcon>
                  <AdminPanelSettingsIcon fontSize="small" />
                </AppRegistrationIcon>
                <Typography noWrap className="mx-2">
                  Register
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/viewActiveProducts"
              >
                <CategoryIcon>
                  <AdminPanelSettingsIcon fontSize="small" />
                </CategoryIcon>
                <Typography noWrap className="mx-2">
                  Products
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            style={{ color: "yellow" }}
          >
            MasaZON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              onClick={handleCloseNavMenu}
              sx={{ m: 2, color: "white", display: "block" }}
              style={{ textDecoration: "none" }}
              as={Link}
              to="/"
            >
              Home
            </Typography>
            <Typography
              onClick={handleCloseNavMenu}
              sx={{ m: 2, color: "white", display: "block" }}
              style={{ textDecoration: "none" }}
              as={Link}
              to="/register"
            >
              Register
            </Typography>
            <Typography
              onClick={handleCloseNavMenu}
              sx={{ m: 2, color: "white", display: "block" }}
              style={{ textDecoration: "none" }}
              as={Link}
              to="/viewActiveProducts"
            >
              Products
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="images/AdminIcon.JPG" />
              </IconButton>
            </Tooltip>

            {user.id ? (
              user.isAdmin ? (
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component={Link}
                    // component={NavLink}
                    to="/adminDashboard"
                  >
                    <ListItemIcon>
                      <AdminPanelSettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography noWrap>Dashboard</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={logoutHandler}
                    component={Link}
                    // component={NavLink}
                    to="/login"
                  >
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography noWrap>Logout</Typography>
                  </MenuItem>
                </Menu>
              ) : (
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={logoutHandler}
                    component={Link}
                    // component={NavLink}
                    to="/login"
                  >
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography noWrap>Logout</Typography>
                  </MenuItem>
                </Menu>
              )
            ) : (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={handleCloseUserMenu}
                  component={Link}
                  // component={NavLink}
                  to="/login"
                >
                  <ListItemIcon>
                    <LoginIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography noWrap>Login</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppNavBar;
