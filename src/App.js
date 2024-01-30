import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Acceuil from "./pages/Acceuil";
import Logout from "./utility/Logout";
import Dashboard from "./pages/Dashboard";
import Statistiques from "./pages/Statistiques";
import Marque from "./pages/Marque";
import Categorie from "./pages/Categorie";
import Annonce from "./pages/Annonce";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Connexion />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Accueil" element={<Acceuil />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/marque" element={<Marque />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/stat" element={<Statistiques />} />
        <Route path="/annonce" element={<Annonce />} />
      </Routes>
    </BrowserRouter>

  )
};

export default App;