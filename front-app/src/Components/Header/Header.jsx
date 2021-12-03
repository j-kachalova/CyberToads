import { Logo } from './Logo';

import './Header.css';

import logo from './Logo.svg';
import { HeaderLink } from './HeaderLink';

const Header = () => {
    return (
        <div className='Header Header_container'>
            <HeaderLink>
                <img src={logo} alt='logo' className='Logo'/>
            </HeaderLink>
            <HeaderLink> Преимущества </HeaderLink>
            <HeaderLink> Сценарии использования </HeaderLink>
            <HeaderLink>  Наши партнеры </HeaderLink>
            <HeaderLink> Почему это безопасно? </HeaderLink>
            
            <div className='Header_link'>
                <button className='Header_Login_button'> Войти в аккаунт </button>
            </div>
        </div>
    )
}

export { Header }