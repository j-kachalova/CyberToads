import React from 'react';
import axios from 'axios';

export default class DetectPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedFiles: undefined};

        this.selectFiles = this.selectFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    selectFiles = (e) => {
        this.setState({
            selectedFiles: e.target.files
        });
    }

    sendRequest() {
        const data = new FormData();
        data.append("files", this.state.selectedFiles);
        axios({
            method: "POST",
            url: "http://localhost:8080/proceed",
            data: data,
            headers: data.getHeaders(),
        }).then(result => {
            console.log("--> Success!")
            console.log(result);
        }).catch(error => {
            console.log("--> Failure!")
            console.log(error);
        })
    }

    render() {
        return (
            <div className={"wrapper"}>
                <input type="file" multiple className="form-control" name="file" onChange={this.selectFiles}/>
                <br/><br/>
                <button disabled={!this.state.selectedFiles} onClick={this.sendRequest} type="submit">Do magic</button>
                <hr/>
                <label>
                    Choose files and click on the button above. Then check the console for result
                </label>
            </div>
        )
    }
}
