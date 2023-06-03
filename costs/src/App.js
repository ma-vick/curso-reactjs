import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from './routes/Home';
import Contact from './routes/Contact';
import Company from './routes/Company';
import NewProject from './routes/NewProject';
import Projects from './routes/Projects';
import Container from "./components/layout/Container";

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
