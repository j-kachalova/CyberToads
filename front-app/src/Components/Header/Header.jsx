import './Header.css';

import logo from './Logo.svg';
import { HeaderLink } from './HeaderLink';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reduceActions } from '../../Redusers';

const Header = () => {

    const refLogo = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const refs = useMemo(() => [refLogo, ref1, ref2, ref3, ref4], [refLogo, ref1, ref2, ref3, ref4]);

    const curr = useSelector(state => state.currentPagePos);
    const dispatch = useDispatch();

    const ScrollToElem = useCallback((num) => {
        dispatch({type: reduceActions.scrollTo, value: num});
    }, [dispatch]);

    useEffect(() => {
        refs.forEach(r => r.current.classList.remove('Header_link_selected'));
        refs[curr-1].current.classList.add('Header_link_selected');
    }, [curr, refs])

    return (
        <div className='Header Header_container'>
            <HeaderLink elemRef = {refLogo} onClick={() => ScrollToElem(1)}>
                <img src={logo} alt='logo' className='Logo'/>
            </HeaderLink>
            <HeaderLink elemRef = {ref1} onClick={() => ScrollToElem(2)}> Преимущества </HeaderLink>
            <HeaderLink elemRef = {ref2} onClick={() => ScrollToElem(3)}> Сценарии использования </HeaderLink>
            <HeaderLink elemRef = {ref3} onClick={() => ScrollToElem(4)}> Наши партнеры </HeaderLink>
            <HeaderLink elemRef = {ref4} onClick={() => ScrollToElem(5)}> Почему это безопасно? </HeaderLink>
            
            <div className='Header_link'>
                <button className='Header_Login_button'> Войти в аккаунт </button>
            </div>
        </div>
    )
}

export { Header }