import { MainBanner } from './MainBanner';
import './MainPage.css';
import '../../Header/Header.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { animateScroll as scroll, scroller } from "react-scroll";
import {Advantages} from "./advantages/Advantages";
import {UsageScenarios} from "./usage_scenarios/UsageScenarios";
import {Security} from "./Security/Security";

const MainPage = () => {

    const curr = useSelector(state => state.currentPagePos);

    useEffect(() => {
        const animOps = {
            duration: 500,
            smooth: true
        }

        switch(curr) { //links where to scroll must be in div elements as name, use scroller to scroll
            case 0: 
                scroller.scrollTo('MainBanner', animOps);
                break;
            case 1:
                scroller.scrollTo('advantages', animOps);
                break;
            case 2:
                scroller.scrollTo('usage_scenarios', animOps);
                break;
            case 4:
                scroller.scrollTo('Security', animOps);
                break;
            default:
                scroll.scrollToTop(animOps);
                return;
        }
    }, [curr]);

    return (
        <div className='MainPage'>
            <div className='Header_container' name='MainBanner' />
            <MainBanner />
            <Advantages />
            <UsageScenarios/>
            <Security />
            <div className='testbox' name='section2'/>
        </div>
    )
}

export { MainPage };
