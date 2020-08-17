import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import API from "../utils/API";

class Search extends Component {
    state = {
        users: [{}],
        order: "descend",
        filterdUsers: [{}]
    };

    componentDidMount() {
        API.getEmployee()
        .then(res =>  {console.log(res.data)
            this.setState({ users: res.data.results })
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.users[0]);
        return (
            <div>
                
                <EmployeeRow results={this.state.users}/>
                
                    

            </div>
        )
    }
}

export default Search;

