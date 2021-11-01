import React, {useState} from 'react';
import backendURL from '../../variables/variables';
const $ = window.$;

export default function AddModal(props){
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [job_title, setJob_Title] = useState('');
    const [location, setLocation] = useState('');

    const inputChange = (e) => {
        switch(e.target.id){
            case 'fn_input':
                setFirstName(e.target.value);
                break;
            case 'ln_input':
                setLastName(e.target.value);
                break;
            case 'em_input':
                setEmail(e.target.value);
                break;
            case 'jt_input':
                setJob_Title(e.target.value);
                break;
            case 'lo_input':
                setLocation(e.target.value)
                break;
            default:
                console.log('Error');
        }
    }

    const clear = () => {
        $('#fn_input').val('');
        $('#ln_input').val('');
        $('#em_input').val('');
        $('#jt_input').val('');
        $('#lo_input').val('');
    }

    const handleAddSubmit = (e) => {
        e.preventDefault()
        const url = backendURL+'/people';
        const body = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            job_title: job_title,
            location: location

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
                console.log(response.json());
                props.getProfiles();
                clear();
            });
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Profile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id = 'addForm' onSubmit = {handleAddSubmit}>
                        <input onChange = {inputChange} id = 'fn_input' type = 'text' placeholder = 'First Name'></input>
                        <input onChange = {inputChange} id = 'ln_input' type = 'text' placeholder = 'Last Name'></input>
                        <input onChange = {inputChange} id = 'em_input' type = 'text' placeholder = 'Email'></input>
                        <input onChange = {inputChange} id = 'jt_input' type = 'text' placeholder = 'Job Title'></input>
                        <input onChange = {inputChange} id = 'lo_input' type = 'text' placeholder = 'Location'></input>
                        <input type = 'submit'></input>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}