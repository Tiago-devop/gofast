import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import GlobalStyle from "./GlobalStyles";
import About from "./pages/About";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
