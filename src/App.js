import React from "react";
import { NavLink,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import About from "./components/About";

function App() {
  return (
    <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <NavLink to="/"><a class="navbar-brand" >Camila Olivares R</a></NavLink>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="/about"> <a class="nav-link">Acerca de</a></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/portfolio"><a class="nav-link">Portafolio</a></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/blog"><a class="nav-link">Blog</a></NavLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <main>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="about" element={<About/>} />
      </Routes>
    </main>
    <footer class="text-center bg-body-tertiary">
    <div class="container pt-4">
    <section class="mb-4">
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      >
      </a>
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>
  <div class="text-center p-3">
    <p>© 2024 Copyright: Make love CamiDev</p> 
    
  </div>
    </footer>
    </section>
   
  );
}

export default App;
