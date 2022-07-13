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
          <Route path="Soluciones" element={<Soluciones />} />
          <Route path="Sistema" element={<Sistema />} />
          <Route path="Precios" element={<Precios />} />
          <Route path="Soporte" element={<Soporte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
