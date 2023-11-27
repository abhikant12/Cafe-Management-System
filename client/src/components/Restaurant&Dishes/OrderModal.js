import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";
import axios from "axios";

const OrderModal = props => {
  const { order } = props;

  useEffect(() => {
    const M = window.M;
    M.Modal.init(document.querySelector(".modal"));
  }, []);

  const resContext = useContext(ResContext);
 


  const initPayment = (data) => {
		const options = {
			key: "rzp_test_k3E5sBxF4vy0BQ",
			amount: data.amount,
			currency: data.currency,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
          onSubmitOrder();
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};


  const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:3000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: order.amount });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  
  const onSubmitOrder = () => {

    let orderData = {
      amount: order.amount,
      resName: order.resName,
      dishData: []
    };

    order.data.forEach(data => {
      if (data.quantity > 0) {
        const { dish, quantity } = data;
        orderData.dishData.push({ dish, quantity });
      }
    });

    console.log(orderData);
    resContext.submitOrder(orderData);
    props.history.push("/home");

  };
  

  return (
    <div id="order" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Confirm Order</h4>
        <p className="lead">
          Amount: <strong>Rs. {order.amount}</strong>
        </p>
        <ul className="collection">
          {order.data.map(
            data =>
              data.quantity > 0 && (
                <li key={data.dish} className="collection-item">
                  {data.name}
                  <div className="secondary-content"> Qty: {data.quantity}</div>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="left btn red modal-close waves-effect waves-light"
        >
          Close
        </a>
        <button onClick = {handlePayment} className="right btn modal-close waves-effect waves-light" > Confirm </button>
          
    
      </div>
    </div>
  );
};

export default withRouter(OrderModal);
