import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <Header />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/home" element={<Home />}>
            </Route>
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;
