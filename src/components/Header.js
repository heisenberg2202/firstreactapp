import React from "react";

const styles = { color: "tomato",
    fontSize: "40px",
    fontWeight: "bold" 
};

function Header(props) {
    console.log(props);
    return <h1 style={styles}>Hello from indeed, {props.name}, {props.color}</h1>;
}

export default Header;