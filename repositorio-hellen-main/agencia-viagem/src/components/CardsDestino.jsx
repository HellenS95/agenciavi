import imgSalvador from "../imagens/salvador-card.png"
import imgCeara from "../imagens/ceara-card.png"
import imgRecife from "../imagens/recife-card.png"
import imgNatal from  "../imagens/natal-card.png"
import imgParaiba from  "../imagens/paraiba-card.png"
import imgAlagoas from  "../imagens/alagoas-card.png"

const CardsDestino = () => {
    return (<section className="container-destinos">
    <div className="card" style={{ width: "18rem" }}>
  <img src={imgSalvador} className="card-img-top" alt="Salvador" />
  <div className="card-body">
    <h5 className="card-title">Salvador, Bahia</h5>
    <p className="card-text">
      Salvador, a "Cidade da Alegria", é um destino vibrante que combina história colonial, praias deslumbrantes e uma cena cultural rica.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src={imgRecife} className="card-img-top" alt="Recife" />
  <div className="card-body">
    <h5 className="card-title">Recife, Pernambuco</h5>
    <p className="card-text">
      Conhecida como a "Veneza Brasileira", Recife encanta com seus canais, pontes, praias e uma rica cena cultural.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src={imgCeara} className="card-img-top" alt="Fortaleza" />
  <div className="card-body">
    <h5 className="card-title">Fortaleza, Ceará</h5>
    <p className="card-text">
      Fortaleza é famosa por suas praias de águas quentes e suas vibrantes festas à beira-mar.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src={imgNatal} className="card-img-top" alt="Natal" />
  <div className="card-body">
    <h5 className="card-title">Natal, Rio Grande do Norte</h5>
    <p className="card-text">
      Natal é conhecida por suas dunas de areia e praias deslumbrantes, perfeitas para atividades ao ar livre.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src={imgParaiba} className="card-img-top" alt="João Pessoa" />
  <div className="card-body">
    <h5 className="card-title">João Pessoa, Paraíba</h5>
    <p className="card-text">
      João Pessoa é famosa por suas praias tranquilas e seu centro histórico bem preservado.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src={imgAlagoas} className="card-img-top" alt="Maceió" />
  <div className="card-body">
    <h5 className="card-title">Maceió, Alagoas</h5>
    <p className="card-text">
      Maceió é conhecida por suas praias de águas cristalinas e coqueirais exuberantes.
    </p>
    <a href="#" className="btn btn-primary">
      Explorar
    </a>
  </div>
</div>


  </section>
  )
}

export default CardsDestino;