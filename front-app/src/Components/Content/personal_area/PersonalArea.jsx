import {Search} from "./search/Search";
import {Info} from "./info/Info";
import {Categories} from "./categories/Categories";
import {Analysis} from "./analysis/Analysis";

const PersonalArea = () => {
    return (
        <div>
            <Search/>
            <Info/>
            <Categories/>
            <Analysis/>
        </div>
    )
}

export { PersonalArea };
