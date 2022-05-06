import { Box } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Explanation from "./Explanation";
import FourthCol from "./FourthCol";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import ServicesList from "./ServicesList";
import data from "../../data/DefList.js";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const MainMenu = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [isTrue, setIsTrue] = useState(true);

  const [servicesList, setServicesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  
  const [search, setSearch] = useState("");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleMapClick = () => {
    setIsTrue(true);
  };

  const handleMapClickFalse = () => {
    setIsTrue(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  function getFilteredList() {
    if (!selectedCategory) {
      return servicesList;
    }
    return servicesList.filter((item) => item.subcategory === selectedCategory);
  }

  useEffect(() => {
    setServicesList(data);
  }, []);

  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    servicesList,
  ]);

  return (
    <Box flex={2.6} sx={{ display: { xs: "none", sm: "block" } }}>
      <div className="main-menu-wrapper">
        <Container maxWidth="xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                padding: "20px",
              }}
            >
              {/* first col */}
              <Explanation />
              {/* first col */}
            </Grid>
            <Grid item xs={12} sm={12} sx={{ padding: "20px" }}>
              {/* second col */}
              <Paper
                xs={12}
                sx={{
                  width: "80%",
                  boxShadow: "none",
                  display: "flex",
                  borderBottom: "1px solid #D1D5DB",
                  borderRadius: "0px",
                  marginBottom: "10px",
                }}
              >
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => {
                    handleMapClick();
                    handleListItemClick(event, 0);
                  }}
                  sx={{
                    borderBottom: "3px solid transparent",
                    width: "55%",
                    marginRight: "10px",
                    backgroundColor: "none",
                    "&:hover": {
                      color: "#3288FF",
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      borderBottom: "3px solid #3288FF",
                    },
                  }}
                >
                  <ListItemText primary="ჩემი პანელი" />
                  <span className="span-mod">{filteredList.length}</span>
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => {
                    handleMapClickFalse();
                    handleListItemClick(event, 1);
                  }}
                  sx={{
                    borderBottom: "3px solid transparent",
                    width: "85%",
                    marginRight: "10px",
                    backgroundColor: "none",
                    "&:hover": {
                      color: "#3288FF",
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      borderBottom: "3px solid #3288FF",
                    },
                  }}
                >
                  <ListItemText primary="გამოყენებული სერვისები" />
                  <span className="span-mod">0</span>
                </ListItemButton>
              </Paper>
              {/* second col */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {/* third col */}
              <Box
                sx={{
                  width: "27%",
                  display: "flex",
                  backgroundColor: "#f3f4f6",
                  marginLeft: "10px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="categories-menu">კატეგორიები</InputLabel>
                  <Select
                    labelId="categories-menu"
                    label="კატეგორიები"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="">ყველა</MenuItem>
                    <MenuItem value="სახლისთვის">სახლისთვის</MenuItem>
                    <MenuItem value="კორპუსისთვის">კორპუსისთვის</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {/* fourth col */}
              <FourthCol setSearch={setSearch} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                padding: "20px",
              }}
            >
              {/* fifth col */}
              {isTrue ? (
                // eslint-disable-next-line array-callback-return
                filteredList.filter((value) => {
                  if(search === "") {
                    return value
                  } else if 
                    (value.title.toLowerCase().includes(search.toLowerCase())) {
                    return value
                  }
                }).map((item, index) => {
                  return (
                    <ServicesList
                      key={index}
                      img={item.img}
                      title={item.title}
                      category={item.category}
                      desc={item.desc}
                    />
                  );
                })
              ) : (
                <p>არ არის ინფორმაცია.</p>
              )}
              {/* fifth col */}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default MainMenu;
