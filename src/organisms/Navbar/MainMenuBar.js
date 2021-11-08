import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "./Button";
import Explore from "./Explore";
// import Button from "@material-ui/core/Button"


export default function ButtonAppBar({ onPress, categorySearch }) {
  const handleEvent = (val) => {
    onPress(val);
  };

  const getExploreCategory = (category) => {
    categorySearch(category);
  };
  return (
    <Toolbar>
      <Explore
        getExploreCategory={(category) => getExploreCategory(category)}
      />
      <Button name="My Library" onClick={() => handleEvent(0)} endIcon={null} />
      <Button name="Add Book" onClick={() => handleEvent(1)} endIcon={null} />
  
    </Toolbar>
  );
}
