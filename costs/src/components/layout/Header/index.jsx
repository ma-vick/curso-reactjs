import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
                <li><Link to='/newproject'>Novo Projeto</Link></li>
            </ul>
        </nav>
    </header>
  )
}
