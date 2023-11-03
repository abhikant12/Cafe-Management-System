import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Home = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated){
      props.history.push("/home");
    }
  });

  return (
    <div id="showcase" style={{ margin: "0 -1rem" }}>
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">Cafe<span className="amber-text text-lighten-4">teria</span> </h2>
            <p className="flow-text cyan-text">Join us to feed your hunger.</p>
            <p className="lead"> Place your order now and experience the convenience of enjoying delicious food. </p>
          </div>
          <div className="card-action">
            <div className="card-links"> 
              <a href="/register" className="btn btn-large waves-effect waves-light teal darken-3" > Register </a>
              <a href="/login" className="btn btn-large waves-effect waves-light teal darken-3" > Login </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;