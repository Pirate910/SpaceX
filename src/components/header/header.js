import './style.css'
import logo from './../../img/image 3.png';
import favoritesBtn from './../../img/header-like-btn.svg'

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__container container">
                <a href='/' className="header-logo-link" ><img src={logo} className="header-logo" alt="header_logo"></img></a>
                <nav className='header-menu-nav'>
                    <ul className='header-menu-ul'>
                        <li className='header-menu-el'><a href='/' className='header-menu-el-link'>home</a></li>
                        <li className='header-menu-el'><a href='/' className='header-menu-el-link'>tours</a></li>
                        <li className='header-menu-el'><a href='/' className='header-menu-el-link'>about</a></li>
                        <li className='header-menu-el'><a href='/' className='header-menu-el-link'>help</a></li>
                    </ul>
                </nav>
                <div className='header-btn-block'>
                    <button className='header-btn-favorites' type='click'><img alt='favoriteSelect' src={favoritesBtn}></img></button>
                    <button className='header-btn-register-link' type='submit'>sign in</button>
                </div>
            </div>
        </div>
     );
}
 
export default Header;