import CartWidget from '../CarWidget/CartWidget'
import './Navbar.css'


export const Navbar = () => {

    return(
        <header className="header">
            <div className="header_container">
                <img className='logo' src={'./public/Logo.PNG'} alt="LOGO" />

                <nav className="navbar">
                    <a href='#' className="navbar__link">Inicio</a>
                    <a href='#' className="navbar__link">Productos</a>
                    <a href='#' className="navbar__link">Contacto</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}