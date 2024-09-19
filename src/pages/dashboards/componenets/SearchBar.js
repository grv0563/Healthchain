import React from "react";
// import TextField from "@mui/material/TextField";
import { TextField } from "@mui/material";
import List from "./List";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [inputText, setInputText] = useState("Patient's Name");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    
  };

  return (
    <div className="main">
      <div className="search">
        <input
          
          placeholder="search patients"
          onChange={inputHandler}
          value={inputText}
          
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
