// Import necessary dependencies
import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './App.css';

// App component
const App = () => {
  return (
    <>
      <Navbar /> {/* Render Navbar component */}
      <Header /> {/* Render Header component */}
      <ProductList /> {/* Render ProductList component */}
      <Footer /> {/* Render Footer component */}
    </>
  );
};


// Header component
function Header() {
  return (
    <header className="bg-dark py-5 header">
      <div>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container-xl">
        <p className="m-0 text-center text-white">
          Copyright © Your Website 2023
        </p>
      </div>
    </footer>
  );
}

// Export App component
export default App;
