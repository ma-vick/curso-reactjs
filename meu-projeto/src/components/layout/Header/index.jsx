import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <>
        <nav>
          <ul className="list">
            <li className="item">
              <Link to="/home">home</Link>
            </li>
            <li className="item">
              <Link to="/empresa">empresa</Link>
            </li>
            <li className="item">
              <Link to="/contato">contato</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}
