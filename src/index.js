import React from 'react'; 
import { render } from 'react-dom'
import 'normalize.css';
import App from './app.js';
import { GlobalStyles }  from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const rootElement = document.getElementById("root");

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
rootElement
);


