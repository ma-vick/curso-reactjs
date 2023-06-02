import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="social-list">
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </footer>
  );
}
