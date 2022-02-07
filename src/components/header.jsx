import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/style.css'

function Header() {
    return (
        <nav className='kasa-header'>
            <img src={ logo} alt='kasa'/>
            <div className='header-menu'>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header