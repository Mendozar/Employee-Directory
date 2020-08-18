import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import moment from "moment";
import API from "../utils/API";
import SearchBox from "./SeachBox";
import Titles from "./Titles";

class Search extends Component {
    state = {
        users: [{}],
        order: "descend",
        filterdUsers: [{}],
        loading: true,
        search: "",
        sorted: false
    };

    componentDidMount() {
        API.getEmployee()
        .then(res =>  {
            // console.log(res.data)
            this.setState({ users: res.data.results, loading: false })
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let { users, search } = this.state;
        let searchEmployee = users.filter(sorted => {
            return (
               sorted.name.first.toLowerCase().includes(search.toLowerCase())
            )
        })
        // this.setState({filteredUsers: searchEmployee})
        // console.log(event.target.value)
        this.setState({ search: event.target.value });
        this.setState({ filterdUsers: searchEmployee });
        console.log(this.state.filterdUsers)
    };

    // startSort = event => {
    //     this.setState({ search: event.target.value }, () => {
    //       this.sortEmp();
    //       this.setState({ sorted: true });
    //     });
    //   };
    

    render() {
        return (

            <div>
                {this.state.loading || !this.state.users ? (
                    <div> loading...</div> 
                 ): ( 
                <div>
                    <SearchBox handleInput={this.handleInputChange}/>
                    <Titles/>
                    {this.state.users.map(users => (

                        <EmployeeRow
                            key={users.dob.date}
                            img={users.picture.medium}
                            name={users.name.first + " " + users.name.last} 
                            phone={users.cell}
                            email={users.email}
                            dob={moment(users.dob.date).format("MM-DD-YYYY")}
                        />
                        // <div key={users.dob.date}>
                        // <div>{users.name.title}</div>
                        // <div>{users.name.first}</div>
                        // <div>{users.name.last}</div>
                        // <div>{users.cell}</div>
                        // <div>{users.email}</div>
                        // <div>{users.dob.date}</div>
                        // <img src={users.picture.large} alt={users.name.first} />
                        // </div>
                    ))}    

                </div>    
                 )}
            </div>
        )
    }
}

export default Search;

