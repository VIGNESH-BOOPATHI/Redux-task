import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import App from './App.jsx'; // Import the root component of the application
import './index.css'; // Import CSS styles
import { Provider } from 'react-redux'; // Import Provider to make Redux store available to components
import store from './store'; // Import Redux store

// Render the root component of the application wrapped in a Provider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Use Provider to make Redux store available */}
    <App /> {/* Render the root component of the application */}
  </Provider>
);
