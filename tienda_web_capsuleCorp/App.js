import "./styles.css";
//Layout
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
