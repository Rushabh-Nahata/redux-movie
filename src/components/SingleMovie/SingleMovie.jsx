import React, { useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axiosinstance from "../../axiosinstance";
import "./singlemovie.css"
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productionAction";
const SingleMovie = () => {
  const { id } = useParams();
  let product = useSelector((state) => state.product);
  const {
    Poster,
    Country,
    Title,
    Director,
    Language,
    Released,
    imdbRating,
    imdbVotes,
  } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axiosinstance
      .get(`?apikey=21f00cb7&i=${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail(id);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <div>
      <div id="singlemovie">
        <div className="singlemovie">
          <div className="mainbox">
            <div className="movie-img-holder left">
              <img src={Poster} alt={Country} />
            </div>
            <div className="single-movie-right">
              <h4>
                <span>Title of the Movie </span>: {Title}
              </h4>
              <h4>
                <span>Director</span> : {Director}
              </h4>
              <h4>
                <span>Country </span>: {Country}
              </h4>
              <h4>
                <span>Language </span>: {Language}
              </h4>
              <h4>
                <span>Released date</span> : {Released}
              </h4>
              <h4>
                <span>IMDB Rating </span>: {imdbRating}
              </h4>
              <h4>
                <span>Number of People voted </span>: {imdbVotes}
              </h4>
              {/* <h4>Number of People voted: {movie.imdbVotes}</h4> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
