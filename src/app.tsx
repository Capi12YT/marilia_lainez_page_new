import RequireAuth from "@/components/RequireAuth";
import RequireAdmin from "@/components/RequireAdmin";
import Billing from "@/pages/billing";
import BillingSuccess from "@/pages/billing-success";
import Chat from "@/pages/chat";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import DescargarApp from "@/pages/descargar-app";
import Alisados from "@/pages/alisados";
import Highlights from "@/pages/servicios/highlights";
import Balayages from "@/pages/servicios/balayages";
import Color from "@/pages/servicios/color";
import Peinados from "@/pages/servicios/peinados";
import Recogidos from "@/pages/servicios/recogidos";
import Rizos from "@/pages/servicios/rizos";
import Corte from "@/pages/servicios/corte";
import CorteCaballero from "@/pages/servicios/corte-caballero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Eventos from "./pages/servicios/eventos";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descargar-app" element={<DescargarApp />} />
        <Route path="/alisados" element={<Alisados />} />
        <Route path="/servicios/highlights" element={<Highlights />} />
        <Route path="/servicios/balayages" element={<Balayages />} />
        <Route path="/servicios/color" element={<Color />} />
        <Route path="/servicios/peinados" element={<Peinados />} />
        <Route path="/servicios/recogidos" element={<Recogidos />} />
        <Route path="/servicios/rizos" element={<Rizos />} />
        <Route path="/servicios/corte" element={<Corte />} />
        <Route path="/servicios/corte-caballero" element={<CorteCaballero />} />
        <Route path="/servicios/eventos" element={<Eventos />} />

        {/* Authentication routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Billing routes */}
        <Route
          path="/billing"
          element={
            <RequireAuth>
              <Billing />
            </RequireAuth>
          }
        />
        <Route
          path="/billing/success"
          element={
            <RequireAuth>
              <BillingSuccess />
            </RequireAuth>
          }
        />

        {/* Chat routes */}
        <Route
          path="/chat"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
