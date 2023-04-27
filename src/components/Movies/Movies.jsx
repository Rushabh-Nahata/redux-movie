import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";
import { useSelector } from "react-redux";
const Movies = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log("the produx ts ", products);
  // console.log("the produx Search ", products.Search);

  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   setData(products);
  // }, [data]);

  return (
    <>
      <div id="home">
        <div className="movie-container">
          <div className="movie-display">
            {products.map((current) => {
              const { imdbID, Title, Poster } = current;
              const movieName = Title.substring(0, 15);
              return (
                <div key={imdbID}>
                  {/* <Col sm={4} md={3} lg={2}> */}
                  <NavLink to={`movie/${imdbID}`}>
                    <div className="movie-card">
                      <div className="movie-heading">
                        <h4>
                          {movieName.length >= 15
                            ? `${movieName} ...`
                            : movieName}
                        </h4>
                      </div>
                      <div className="movie-image-holder">
                        <img src={Poster} alt={imdbID} />
                      </div>
                      {/* <button style={{padding:"10px", margin:"10px"}} className="btn btn-primary">Extra details</button> */}
                    </div>
                  </NavLink>
                  {/* </Col> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
