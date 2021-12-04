import "./UsageScenarios.css";
import information_about_yourself from "./assets/1 information about yourself.svg";
import opinion_to_you from "./assets/2 opinion to you.svg";
import analysis from "./assets/3 analysis.svg";
import your_changing from "./assets/4 your changing.svg";
import delete_personal_information from "./assets/5 delete personal information.svg";

const UsageScenarios = () => {
    return (
        <div className={"usage_scenarios"}>
            <h3 className={"title"}>Сценарии использования</h3>
            <div className={"usage_scenarios_rows"}>
                <div className={"usage_scenarios_row first_row"}>
                    <div className={"usage_scenario_cell"}>
                        <img src={information_about_yourself} alt={""}/>
                    </div>
                    <div className={"usage_scenario_cell"}>
                        <img src={opinion_to_you} alt={""}/>
                    </div>
                    <div className={"usage_scenario_cell"}>
                        <img src={analysis} alt={""}/>
                    </div>
                </div>
                <div className={"usage_scenarios_row"}>
                    <div className={"usage_scenario_cell"}>
                        <img src={your_changing} alt={""}/>
                    </div>
                    <div className={"usage_scenario_cell"}>
                        <img src={delete_personal_information} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { UsageScenarios };
