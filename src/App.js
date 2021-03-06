import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import GlobalStyle from './Components/Style/GlobalStyle';
import ModalItem from './Components/ModalItem/ModalItem';
import Order from './Components/Order/Order';
import { useOpenItem } from './Components/hooks/useOpenItem';
import { useOrders } from './Components/hooks/useOrders';
import { useAuth } from './Components/hooks/useAuth';
import useTitle from "./Components/hooks/useTitle";
import { useDB } from "./Components/hooks/useDB";
import { useOrderConfirm } from "./Components/hooks/useOrderConfirm";
import OrderConfirm from "./Components/Order/OrderConfirm";
import { Context } from "./utils/context";

const firebaseConfig = {
    apiKey: 'AIzaSyC2ekJq3NL4DjXrGs3Hx6LnmUc2Of2VHIY',
    authDomain: 'glo-react-test.firebaseapp.com',
    databaseURL:
        'https://glo-react-test-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'glo-react-test',
    storageBucket: 'glo-react-test.appspot.com',
    messagingSenderId: '16329223261',
    appId: '1:16329223261:web:cdcf101a57a2a95108b1b4',
};

firebase.initializeApp(firebaseConfig);

function App() {
    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
    useTitle(openItem.openItem)
    const database = firebase.database()
    const dbMenu = useDB(database)
    const orderConfirm = useOrderConfirm()


    return (
        <Context.Provider value={{auth, openItem, dbMenu, orders, orderConfirm, database}}>
            <GlobalStyle />
            <NavBar/>
            <Order/>
            <Menu/>
            {openItem.openItem ? <ModalItem/> : null}
            {orderConfirm.openOrderConfirm &&
                <OrderConfirm/>
            }
        </Context.Provider>
    );
}

export default App;
