import React from "react";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
//UI comps
import Card from "../components/Card";
import Button from "../components/Button";

const Product = ({ image }) => {
  return (
    <>
      <Navbar />
      <h2>Product Page</h2>
      <Content image={image} />
      <Related />
      <Footer />
    </>
  );
};

const Content = ({ image }) => {
  return (
    <main className="product-content">
      <div>
        <img
          src={
            "http://vignette2.wikia.nocookie.net/dbz-dokkanbattle/images/3/3f/Training_4.png/revision/latest?cb=20150903220943"
          }
          alt="product"
        />
      </div>
      <div className="product-content-desc">
        <div>Title</div>
        <p>This is the product description!!!</p>
        <Button />
      </div>
    </main>
  );
};

const Related = () => (
  <div>
    <h3>Productos Relacionados</h3>
    <div className="related-products">
      <Card
        image={
          "http://vignette2.wikia.nocookie.net/dbz-dokkanbattle/images/3/3f/Training_4.png/revision/latest?cb=20150903220943"
        }
        route={"/product/3"}
      />
      <Card
        image={
          "http://vignette3.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Training_3.png/revision/latest?cb=20150903220933"
        }
        route={"/product/4"}
      />
      <Card
        image={
          "http://vignette1.wikia.nocookie.net/dbz-dokkanbattle/images/1/1b/Support_2.png/revision/latest?cb=20151123094157"
        }
        route={"/product/5"}
      />
    </div>
  </div>
);

export default Product;
