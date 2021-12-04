import security from "./assets/Security.svg"
import './Security.css';

const Security = () => {
    return (
    <div className={"Security"}>
        <img src={security} alt='banner bg' className='Security_image'/>
        <span className='Security_title'>
                Безопасность для нас<br/>
                 не пустые слова
            </span>
        <span className='Security_description'>
                Наш сервис предлагает возможность авторизации через ГосУслуги <br/>
                Это гарантирует максимальную безопасность и никто кроме вас не сможет получить доступ к вашему цифровому следу
            </span>
        <button className='Security_button'>
            Попробуйте сейчас
        </button>
    </div>
    );
}

export { Security };
