import React from 'react'; 
import 'normalize.css';
import App from './app';
import { GlobalStyles }  from './global-styles';
import { createRoot } from "react-dom/client";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,


);


