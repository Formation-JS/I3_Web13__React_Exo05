import icon from './icon.png';
import './Header.scss';

const Header = () => {

    return (
        <header className='header'>
            <img className='header__logo' src={icon} />
            <span className='header__name' >Exo 5 • Todo List</span>
        </header>
    )
}

export default Header;