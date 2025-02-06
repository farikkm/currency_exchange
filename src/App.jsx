import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import CurrencyExchange from "./views/CurrencyExchange";


export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="page__container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<CurrencyExchange />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
