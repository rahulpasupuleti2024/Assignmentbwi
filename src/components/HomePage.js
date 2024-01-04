import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import "./HomeStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPrice, setFilterPrice] = useState("all");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(products);
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const priceResults =
      filterPrice === "all"
        ? searchResults
        : searchResults.filter(
            (product) => product.price <= parseInt(filterPrice)
          );

    setFilteredProducts(priceResults);
  }, [searchTerm, filterPrice, products]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const cartCount = cart.length;
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <div className="top">
        <SearchBar onSearch={setSearchTerm} />
        <FilterOptions onFilter={setFilterPrice} />

        <div className="cart">
          {/* <ShoppingBagOutlinedIcon className="cart-icon" fontSize="small" />{" "} */}
          <ShoppingCartIcon className="cart-icon" fontSize="small" />
          <span className="length">
            {cartCount === 0 ? "" : cartCount}
            {/* {totalAmount === 0 ? "" : totalAmount} */}
          </span>
        </div>
      </div>

      <ProductList products={filteredProducts} AddToCart={addToCart} />
    </>
  );
};

export default HomePage;
