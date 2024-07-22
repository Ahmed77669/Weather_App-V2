import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {} from "./app/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <provider>
        <App />
        </provider>
);
