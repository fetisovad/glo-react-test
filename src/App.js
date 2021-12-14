import React from "react";
import {createGlobalStyle} from 'styled-components'
import NavBar from "./Components/NavBar/NavBar";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }
  
  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

//font-family: 'Pacifico', cursive;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;

function App() {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <div className="App">

            </div>
        </>
    );
}

export default App;