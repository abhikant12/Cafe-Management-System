import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";
import AuthContext from "../../context/auth/authContext";

const RestaurantItem = ({ restaurant }) => {
  const {
    _id,
    name,
    address,
    contactNumber,
    description,
    cuisine
  } = restaurant;

  const resContext = useContext(ResContext);
  const authContext = useContext(AuthContext);
  const { setRestaurant } = resContext;

  const onEdit = () => {
    setRestaurant(restaurant);
  };

  return (
    <div id="my-restaurant" className="card cyan darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">{name}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}> Availability : {address} </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}> Cuisine : {cuisine} </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}> ContactNumber : {contactNumber} </p>
        </blockquote>

        <div className="">  
          <div className="activator btn-floating right">
            <i className="material-icons center">vertical_align_top</i>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="card-links" style={{ justifyContent: "space-between" }}>
          <Link className="amber-accent-3-text" to={`/res/${_id}`}> View Dishes  </Link>

         {authContext.user && authContext.user.role === "restaurant"  && (
           <a
           id="add"
           className="btn-flat modal-trigger"
           href="#restaurant"
           style={{ background: "#00565a" }}
           onClick={onEdit}
         >
           Edit
           <i className="large material-icons right">mode_edit</i>
         </a>
        )}


        </div>
      </div>
      <div className="card-reveal grey lighten-4">
        <span className="card-title" style={{ fontWeight: 500 }}>
          About
          <i className="material-icons right">close</i>
        </span>
        <p className="flow-text" style={{ fontSize: "1.3rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

RestaurantItem.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default RestaurantItem;
