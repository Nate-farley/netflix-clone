import React from 'react'; 
import 'normalize.css';
import App from './app';
import { GlobalStyles }  from './global-styles';
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
    <GlobalStyles />
    <App />
    </>,


);


