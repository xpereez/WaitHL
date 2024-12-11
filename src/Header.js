import React from "react";
import headerImage from ".//header.webp"; // Importa la imagen

function Header() {
  return (
    <header>
      <img src={headerImage} alt="Encabezado" />
      {/* Puedes agregar más contenido aquí según lo que veas en la web original */}
    </header>
  );
}

export default Header;