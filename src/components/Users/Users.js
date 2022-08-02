import React from 'react';
// import classes from "./Users.module.css"


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           user: {
               name: "",
               lastname: "",
               gender: "",
               status: false
           }
        }
    }


    changeInput = (e) => {
        console.log(e.target.name);
        this.setState({
                user: {
                    ...this.state.user,
                    [e.target.name]: e.target.value
                }
            }
        )
    }
    
    submitUser = () => {
        console.log(this.state.user)
    }

    render() {
        return(
            <div>
                <h1>Регистрация пользователя</h1>
                <input type="text" placeholder="name"  name="name" onChange={this.changeInput}/>
                <input type="text" placeholder="lastname"  name="lastname" onChange={this.changeInput}/>
                <select name="gender" onChange={this.changeInput} >
                    <option value="man">Мужчина</option>
                    <option value="women">Женщина</option>
                </select>
                <input type="radio" name="status" value="true" onChange={this.changeInput}/> В браке
                <input type="radio" name="status" value="false" onChange={this.changeInput}/> Не в браке

                <button onClick={this.submitUser}>Send</button>
            </div>
        )
    }

}

export default Users;