import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer 
    position="top-center"
    hideProgressBar={true}
    autoClose={1500}
    />
  </>
)