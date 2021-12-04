import './Footer.css';
import inst from './assets/Inst.svg';
import twitter from './assets/Twitter.svg';
import facebook from './assets/Facebook.svg';

const Footer = () => {
    return (
        <div className="Footer Footer_container">
            <div className="Footer_part">
                <div className="Footer_part_left Column">
                    <div className="Footer_sub_heading">
                        Подпишись на нашу рассылку
                    </div>
                    <p className="Footer_sub">
                        Подпишитесь на эксклюзивный доступ к свежим новостям о наших передовых разработках.
                    </p>
                </div>

                <form className="Footer_part_right Column">
                    <label>Узнавайте о новостях:</label>
                    <div className="Footer_form">
                        <input type="email" placeholder="Введите E-Mail" className="Input_sub"/>
                        <button className="Button_sub">Ввод</button>
                    </div>
                    <div className="Footer_soc_network">
                        <img src={inst} alt='inst' className='Inst'/>
                        <img src={twitter} alt='twitter' className='Twitter'/>
                        <img src={facebook} alt='facebook' className='Facebook'/>
                    </div>
                </form>

            </div>
            <div className="Footer_part">
                <div className="Footer_part_left">
                    <div className="Footer_column">
                        <div className="Footer_column_heading">О нас</div>
                        <div className="Footer_column_txt">Преимущества</div>
                        <div className="Footer_column_txt">Сценарии использования</div>
                        <div className="Footer_column_txt">Безопасность</div>
                        <div className="Footer_column_txt"> Партнеры</div>
                    </div>
                    <div className="Footer_column FC2">
                        <div className="Footer_column_heading">Личный кабинет</div>
                        <div className="Footer_column_txt">Профиль</div>
                        <div className="Footer_column_txt">Поиск</div>
                        <div className="Footer_column_txt">Подача заявления</div>
                        <div className="Footer_column_txt">Аккаунт ГосУслуги</div>
                    </div>
                    <div className="Footer_column">
                        <div className="Footer_column_heading">Контакты</div>
                        <div className="Footer_column_txt">+7(000)000-00-00</div>
                        <div className="Footer_column_txt">Email us</div>
                    </div>
                </div>
                <div className="Footer_part_right Column">

                </div>
            </div>
        </div>
    )
}
export {Footer}