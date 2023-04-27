import React, { useEffect, useCallback, useState } from "react";
import axiosinstance from "../../axiosinstance";
// import search from "../../assets/search.png"
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productionAction";
// import Search from "../Search/Search";
// import "../../components/Search/search.css"
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Movies from "../Movies/Movies";

const Home = () => {
  const [query, setQuery] = useState("Titanic");

   const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch();

   useEffect(()=>{
 const timeout= setTimeout(() => {
      axiosinstance.get(`?apikey=21f00cb7&s=${query}`).then((res) => {

        if (res.data.Response == "True") {
       dispatch(setProducts(res.data.Search));
          console.log(res.data.Search);
        }})
      .catch((err) => {
        console.log(err);
   })
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [query]);

  return (
    <div>
      <Navbar />
      <div className="search">
        <input
          type="text"
          placeholder="Enter a Movie Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Movies />
    </div>
  );
};

export default Home;
