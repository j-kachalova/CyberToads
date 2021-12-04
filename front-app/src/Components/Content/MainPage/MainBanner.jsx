import './MainPage.css';
import MainBannerSvg from './assets/MainBanner.svg';


const MainBanner = () => {
    return (
        <div className = 'MainBanner_wrapper' >
            <img src={MainBannerSvg} alt='banner bg' className='MainBanner_image'/>
            <span className='MainBanner_title'>
                Найдите и отследите<br/>
                своего цифрового двойника!
            </span>
            <span className='MainBanner_description'>
                Наш сервис позволяет увидеть структурированно всю имеющуюся информацию про себя в сети с возможностью её дальнейшего анализа.  
            </span>
            <button className='MainBanner_button'>
                Перейти к сервису
            </button>
            <span className='MainBanner_withSupportOf'>
                При поддержке:
            </span>
        </div>
    )
}

export { MainBanner }