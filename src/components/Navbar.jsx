import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acerca from "../pages/Acerca";
import Blog from "../pages/Blog";
import Terapias from "../pages/Terapias";
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/terapias" element={<Terapias />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <ul>
        <li>
          <a href="http://localhost:3000/inicio">Inicio</a>
        </li>
        <li>
          <a href="http://localhost:3000/acerca">Acerca</a>
        </li>
        <li>
          <a href="http://localhost:3000/terapias">Terapias</a>
        </li>
        <li>
          <a href="http://localhost:3000/blog">Blog</a>
        </li>
        <li>
          <a href="http://localhost:3000/contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
