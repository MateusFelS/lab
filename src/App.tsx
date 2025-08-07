import Main from "./pages/Main";
import Slidenav from "./components/Slidenav";
import Services from "./pages/Services";
import { Divider } from "@mui/material";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from "./pages/Details";  
import Checkout from './pages/CheckoutForm';  
import Footer from "./components/Footer";
import ConsultaResultado from "./pages/Results";

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={
            <>
              <Slidenav />
              <Main />
              <Services />
              <Divider sx={{
                borderBottomWidth: '2px', 
                borderColor: 'black'
              }}/>
              <AboutUs />
              <Contacts />  
              <Footer />  
            </>
          } />

          <Route path="/servico/:servicoId" element={<Details />} />
          <Route path="/checkout/:servicoId" element={<Checkout />} />
          <Route path="/consultar-resultado" element={<ConsultaResultado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
