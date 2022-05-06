import React from "react";
import "./Services.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box flex={1} sx={{ display: { sx: "none", sm: "block" } }}>
      <List>
        <ListItem>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            component="a"
            href="#panel"
            sx={{
              borderRadius: "15px",
              "&:hover": {
                color: "#3288FF",
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ჩემი პანელი" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            component="a"
            href="#panel"
            sx={{
              borderRadius: "15px",
              "&:hover": {
                color: "#3288FF",
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ListItemIcon>
              <AppsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="სერვისები" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            component="a"
            href="#panel"
            sx={{
              borderRadius: "15px",
              "&:hover": {
                color: "#3288FF",
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ListItemIcon>
              <CreditCardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ჩემი ბარათები" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

