import React from "react";
import imgPropaganda from "../imagens/propaganda.png";

const Propaganda = () => {
  return (
    <section className="container-propaganda">
    <div className="propaganda">
      <h4>Viagem pelo Nordeste!</h4>
      <h2>Explore as maravilhas do Nordeste com nossa seleção de pacotes de viagem!</h2>
      <h5>Praias paradisíacas, culturas vibrantes e culinária deliciosa!</h5>
      <div className="container-input-botao">
        <input placeholder="Insira seu email" />
        <button>CADASTRAR</button>
      </div>
    </div>
    <div className="container-img-propaganda">
      {" "}
      <img
        src={imgPropaganda}
        className="img-propaganda"
      />
    </div>
  </section>
  

  );
};

export default Propaganda;
