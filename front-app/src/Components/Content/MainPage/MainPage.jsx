// import AutoScrollContainer from 'auto-scroll-container'

import { MainBanner } from './MainBanner';
import './MainPage.css';
import '../../Header/Header.css';

const MainPage = () => {
    return (
        <div className='MainPage'>
        {/* <AutoScrollContainer> */}
            <div className='Header_container'></div>
            <MainBanner />
        {/* </AutoScrollContainer> */}
        </div>
    )
}

export { MainPage };