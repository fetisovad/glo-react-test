import React, {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import Menu from "./Components/Menu/Menu";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import ModalItem from "./Components/ModalItem/ModalItem";
import Order from "./Components/Order/Order";

//font-family: 'Pacifico', cursive;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;

function App() {
    const [openItem, setOpenItem] = useState(null)

    console.log(openItem)

    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Order/>
            <Menu setOpenItem={setOpenItem}/>
            <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
        </>
    );
}

export default App;