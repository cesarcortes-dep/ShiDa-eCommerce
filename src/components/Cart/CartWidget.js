const CartWidget = () => {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary btn-lg">
        <img
          className="p-1"
          style={{ width: "35px", height: "35px" }}
          src="./img/carrito.png"
          alt="carrito"
        />
        0
      </button>
     
    </div>
  );
};

export default CartWidget;
