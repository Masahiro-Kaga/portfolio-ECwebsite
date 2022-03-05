import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, ListItemIcon } from "@mui/material";
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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              component="div"
              css={logo_wide_screen}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              as={Link}
              to="/"
            >
              <img src="/images/logo_illust.png" alt="" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {user.id && user.isAdmin ? (
                "Admin"
              ) : (
                // <IconButton
                //   size="large"
                //   aria-label="account of current user"
                //   aria-controls="menu-appbar"
                //   aria-haspopup="true"
                //   onClick={handleOpenNavMenu}
                //   color="inherit"
                // >
                //   <MenuIcon />
                // </IconButton>
                <Button
                  id="basic-button"
                  variant="outlined"
                  onClick={handleOpenNavMenu}
                >
                  Menu
                </Button>
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
              noWrap
              component="div"
              css={logo_short_screen}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              as={Link}
              to="/"
            >
              <img src="/images/logo_title.png" alt="" />
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
                  <div
                    css={openmenubtn}
                    className={anchorElUser ? "active" : ""}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
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
    </ThemeProvider>
  );
};

const logo_wide_screen = css`
  width: 64px;
  height: 64px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const logo_short_screen = css`
  height: 32px;
  img {
    height: 100%;
  }
`;

const openmenubtn = css`
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;

  span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
    width: 45%;
  }

  span:nth-of-type(1) {
    top: 15px;
  }

  span:nth-of-type(2) {
    top: 23px;
  }

  span:nth-of-type(3) {
    top: 31px;
  }

  &.active span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }

  &.active span:nth-of-type(2) {
    opacity: 0;
  }

  &.active span:nth-of-type(3) {
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
  }
`;

export default AppNavBar;
