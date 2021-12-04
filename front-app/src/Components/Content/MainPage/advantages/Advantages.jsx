import "./Advantages.css";
import fast_speed from "./assets/1 fast speed.svg";
import convenient_interface from "./assets/2 convenient interface .svg";
import search from "./assets/3 search.svg";
import data_safety from "./assets/4 data safety.svg";
import cross_platform from "./assets/5 cross platform.svg";
import service_safety from "./assets/6 service safety.svg";

const Advantages = () => {
    return (
        <div className={"advantages"}>
            <h3 className={"title"}>Наши преимущества</h3>
            <div className={"advantages_row"}>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={fast_speed} alt={""}/>
                    <span>Высокая скорость поиска информации</span>
                </div>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={convenient_interface} alt={""}/>
                    <span>Удобный интерфейс</span>
                </div>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={search} alt={""}/>
                    <span>Поиск по множеству критериев</span>
                </div>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={data_safety} alt={""}/>
                    <span>Гарантия безопасности ваших данных</span>
                </div>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={cross_platform} alt={""}/>
                    <span>Кросплатформенность сервиса</span>
                </div>
                <div className={"advantages_cell"}>
                    <img className={"adv_photo"} src={service_safety} alt={""}/>
                    <span>Сервис защищен от противоправных действий</span>
                </div>
            </div>
        </div>
    );
}

export { Advantages };
