import "./styles.css";
import { Router } from "@reach/router";
//Layout components
import Navbar from "../layout/Navbar";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
//UI components

//Pages
import Product from "./product";
import About from "./about";

//let myDataArray = [{}]

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Product path="/product/:productId" />
      <About path="/about" />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
