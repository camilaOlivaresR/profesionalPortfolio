import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div class="container">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/tienda">Acerca de</NavLink>
    </div>
  );
}

export default App;
