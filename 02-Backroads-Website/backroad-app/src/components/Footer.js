import React from "react";
import { data } from "../data.js";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {data.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href} className="footer-link">
                {links.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
