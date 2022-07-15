import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Inicio from "./paginas/Inicio";
import Precios from "./paginas/Precios";
import Sistema from "./paginas/Sistema";
import Soluciones from "./paginas/Soluciones";
import Soporte from "./paginas/Soporte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Inicio />} />
          <Route path="soluciones" element={<Soluciones />} />
          <Route path="sistema" element={<Sistema />} />
          <Route path="precios" element={<Precios />} />
          <Route path="soporte" element={<Soporte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
