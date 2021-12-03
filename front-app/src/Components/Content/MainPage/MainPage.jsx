// import AutoScrollContainer from 'auto-scroll-container'

import { MainBanner } from './MainBanner';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className='MainPage'>
        {/* <AutoScrollContainer> */}
            <div className='Holder'></div>
            <MainBanner />
        {/* </AutoScrollContainer> */}
        </div>
    )
}

export { MainPage };