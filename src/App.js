import React from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import GlobalStyle from './Components/Style/GlobalStyle';
import ModalItem from './Components/ModalItem/ModalItem';
import Order from './Components/Order/Order';
import { useOpenItem } from './Components/hooks/useOpenItem';
import { useOrders } from './Components/hooks/useOrders';
import { useAuth } from "./Components/hooks/useAuth";

//font-family: 'Pacifico', cursive;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;

const firebaseConfig = {
    apiKey: "AIzaSyC2ekJq3NL4DjXrGs3Hx6LnmUc2Of2VHIY",
    authDomain: "glo-react-test.firebaseapp.com",
    databaseURL: "https://glo-react-test-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "glo-react-test",
    storageBucket: "glo-react-test.appspot.com",
    messagingSenderId: "16329223261",
    appId: "1:16329223261:web:cdcf101a57a2a95108b1b4"
};

firebase.initializeApp(firebaseConfig)

function App() {
    const auth = useAuth(firebase.auth)

    const openItem = useOpenItem();
    const orders = useOrders();

    return (
        <>
            <GlobalStyle />
            <NavBar {...auth}/>
            <Order {...orders} {...openItem} {...auth}/>
            <Menu {...openItem} />
            {openItem.openItem && <ModalItem {...openItem} {...orders} />}
        </>
    );
}

export default App;