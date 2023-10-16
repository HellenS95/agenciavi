import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Promocoes from "./pages/Promocoes";
import Login from "./pages/Login";
import Contato from "./pages/Contato";

{
  /* <BrowserRouter>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sobre" element={<Sobre />} />
  <Route path="/contato" element={<Contato />} />
</Routes>
</BrowserRouter> */
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
