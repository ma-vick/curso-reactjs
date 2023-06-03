import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../../imgs/costs_logo.png';

export default function Header() {
  return (
    <header className={styles.container}>
        <nav className={styles.navContainer}>
            <Link to="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
            <ul className={styles.navList}>
                <li className={styles.item}><Link to='/home'>Home</Link></li>
                <li className={styles.item}><Link to='/projects'>Projetos</Link></li>
                <li className={styles.item}><Link to='/company'>Empresa</Link></li>
                <li className={styles.item}><Link to='/contact'>Contato</Link></li>
            </ul>
        </nav>
    </header>
  )
}
