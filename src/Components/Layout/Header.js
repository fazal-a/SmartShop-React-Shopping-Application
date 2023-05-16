import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <span className={classes.heading}>Test App</span>
      <span className={classes.button}>
        <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
      </span>
    </div>
  );
};
export default Header;
