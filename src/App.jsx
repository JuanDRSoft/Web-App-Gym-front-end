import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Inicio from "./paginas/Inicio";
import Precios from "./paginas/Precios";
import PreciosEntrenadores from "./paginas/PreciosEntrenadores";
import PreciosGimnasios from "./paginas/PreciosGimnasios";
import PruebaGratis from "./paginas/PruebaGratis";
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
          <Route path="precios-de-gimnasios" element={<PreciosGimnasios />} />
          <Route
            path="precios-de-entrenadores"
            element={<PreciosEntrenadores />}
          />
          <Route path="prueba-gratuita" element={<PruebaGratis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
