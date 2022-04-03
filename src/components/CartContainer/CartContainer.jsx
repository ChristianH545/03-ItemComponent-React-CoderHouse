import React from "react";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import NavBar from "../../layout/NavBar/NavBar";
import CartView from "../Cart/CartView";
import CartContext from "../context/CartContext"; //!SE ENLAZA NUESTRA CARPETA DONDE ESTA LA FUNCTION DEL useContext
import { app } from "../firebase/firebaseConfing";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

const CartContainer = ({ correoUsuario }) => {
  // const { model } = useParams();

  const { itemCart } = useContext(CartContext);
  const product = itemCart;
  return (
    <>
      <NavBar />
      <div className="container">
        <p>
          Bienvenido, <strong>{correoUsuario}</strong> haz iniciado sesión,{" "}
          <strong> ahora podras realizar la compra que desees.</strong> Gracias
          por Registrarte...
        </p>

        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Cerrar Sesión
        </button>

        <hr />
      </div>
      <StyleCartContainer>
        <CartView product={product} />
      </StyleCartContainer>
    </>
  );
};

export default CartContainer;

//*style de nuestro contenedor padre
const StyleCartContainer = styled.main`
  .shopping-cart {
    padding-bottom: 50px;
    font-family: "Montserrat", sans-serif;
  }

  .shopping-cart.dark {
    background-color: #f6f6f6;
  }

  .shopping-cart .content {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
    background-color: white;
  }

  .shopping-cart .block-heading {
    padding-top: 50px;
    margin-bottom: 40px;
    text-align: center;
  }

  .shopping-cart .block-heading p {
    text-align: center;
    max-width: 420px;
    margin: auto;
    opacity: 0.7;
  }

  .shopping-cart .dark .block-heading p {
    opacity: 0.8;
  }

  .shopping-cart .block-heading h1,
  .shopping-cart .block-heading h2,
  .shopping-cart .block-heading h3 {
    margin-bottom: 1.2rem;
    color: #3b99e0;
  }

  .shopping-cart .items {
    margin: auto;
  }

  .shopping-cart .items .product {
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .shopping-cart .items .product .info {
    padding-top: 0px;
    text-align: center;
  }

  .shopping-cart .items .product .info .product-name {
    font-weight: 600;
  }

  .shopping-cart .items .product .info .product-name .product-info {
    font-size: 14px;
    margin-top: 15px;
  }

  .shopping-cart .items .product .info .product-name .product-info .value {
    font-weight: 400;
  }

  .shopping-cart .items .product .info .quantity .quantity-input {
    margin: auto;
    width: 80px;
  }

  .shopping-cart .items .product .info .price {
    margin-top: 15px;
    font-weight: bold;
    font-size: 22px;
  }

  .shopping-cart .summary {
    border-top: 2px solid #5ea4f3;
    background-color: #f7fbff;
    height: 100%;
    padding: 30px;
  }

  .shopping-cart .summary h3 {
    text-align: center;
    font-size: 1.3em;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .shopping-cart .summary .summary-item:not(:last-of-type) {
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shopping-cart .summary .text {
    font-size: 1em;
    font-weight: 600;
  }

  .shopping-cart .summary .price {
    font-size: 1em;
    float: right;
  }

  .shopping-cart .summary button {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .shopping-cart .items .product .info {
      padding-top: 25px;
      text-align: left;
    }

    .shopping-cart .items .product .info .price {
      font-weight: bold;
      font-size: 22px;
      top: 17px;
    }

    .shopping-cart .items .product .info .quantity {
      text-align: center;
    }
    .shopping-cart .items .product .info .quantity .quantity-input {
      padding: 4px 10px;
      text-align: center;
    }
  }
`;
