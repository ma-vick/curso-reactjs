import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <FaFacebook />
                </li>
                <li className={styles.item}>
                    <FaInstagram />
                </li>
                <li className={styles.item}>
                    <FaLinkedin />
                </li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}