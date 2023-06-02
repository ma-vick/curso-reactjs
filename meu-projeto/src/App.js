import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
