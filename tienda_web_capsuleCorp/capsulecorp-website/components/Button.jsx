const Button = () => {
  const action = () => {
    console.log("Pressed");
  };

  return (
    <button className="product-button" onClick={() => action()}>
      ADD TO CART
    </button>
  );
};

export default Button;
