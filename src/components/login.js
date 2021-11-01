import React, {useState} from "react";

export default function Login(props){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        const url = 'http://localhost:8080/auth';
        const body = {
            user: user,
            password: password
        }
        try{
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                accept: "application/json",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": 'application/json',
                }
            }).then((response) => {
                response.json()
                .then((data) => {
                    console.log(data);
                    
                });
            });
        }catch(err){
            console.log(err);
        }
    }

    const onChange = (e) => {
        switch(e.target.id){
            case 'us_input':
                setUser(e.target.value);
                break;

            case 'pa_input':
                setPassword(e.target.value);
                break;

            default:
                console.log('Error');
                break;
        }
    }

    return(
        <div className = 'login-form container-fluid'>
            <div className = 'row'>
                <div className = 'col-6 col-offset-3'>
                    <form onSubmit = {onSubmit}>
                        <input onChange = {onChange} type = 'text' placeholder = 'User'></input>
                        <input onChange = {onChange} type = 'password' placeholder = 'Password'></input>
                        <input type = 'submit'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}