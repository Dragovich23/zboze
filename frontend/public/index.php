<?php
include "../../backend/config/connection.php";
?>
<script>
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './stylesheet/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    </script>

