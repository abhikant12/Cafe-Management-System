import React from "react";

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <div className="left">
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Copyright &copy; {new Date().getFullYear()} </span>
            <span className="footer-link">Terms of Service</span>
        </div>
        <div className="right">
          <h6>
            Made with ❤ by {" "}
            <a href="https://abhikant-portfolio.netlify.app/" target="_blank">  <span className="blue-text"> Abhikant Singh</span> </a>
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
