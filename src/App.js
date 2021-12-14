import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Menu from "./Components/Menu/Menu";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";

//font-family: 'Pacifico', cursive;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;

function App() {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Menu/>
        </>
    );
}

export default App;