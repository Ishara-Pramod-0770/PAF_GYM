import React from "react";
import logo from "./logo.png";
import avatar from "./avatar.png";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
// import { MoreHoriz } from '@mui/icons-material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navigation() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    console.log("Logout");
    handleClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src={logo}
            style={{ width: 60, height: 60, borderRadius: 30 }}
            alt="Logo"
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div className="cursor-pointer flex space-x-3 item-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>   
                     
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "50%",
              py: "15px",
              borderRadius: 30,
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Click me
          </Button>
        </div>
      </div>
      <div className="flex item-center justify-between">
        <div className="flex item-center space-x-3">
          <Avatar alt="username" src={avatar} />
          <div>
            <span>Ishara Pramod</span>
            <span className="opacity-70">@isharapramod</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
