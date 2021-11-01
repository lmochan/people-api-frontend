import React, {useState, useEffect} from 'react';
import backendURL from '../../variables/variables';
const $ = window.$;

export default function EditModal(props) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [job_title, setJob_Title] = useState('');
    const [location, setLocation] = useState('');

    const inputChange = (e) => {
        switch(e.target.id){
            case 'fn_edit':
                setFirstName(e.target.value);
                break;
            case 'ln_edit':
                setLastName(e.target.value);
                break;
            case 'em_edit':
                setEmail(e.target.value);
                break;
            case 'jt_edit':
                setJob_Title(e.target.value);
                break;
            case 'lo_edit':
                setLocation(e.target.value)
                break;
            default:
                console.log('Error');
        }
    }


    const setup = () =>{
        if(props.currentProfile){
            $('#fn_edit').val(props.currentProfile.firstname);
            setFirstName(props.currentProfile.firstname);
            $('#ln_edit').val(props.currentProfile.lastname);
            setLastName(props.currentProfile.lastname);
            $('#em_edit').val(props.currentProfile.email);
            setEmail(props.currentProfile.email);
            $('#jt_edit').val(props.currentProfile.job_title);
            setJob_Title(props.currentProfile.job_title);
            $('#lo_edit').val(props.currentProfile.location);
            setLocation(props.currentProfile.location);
        }
        
    }
    
    $('#editModal').on('shown.bs.modal', function(e){
        setup();
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = backendURL+'/people/update/' + props.currentProfile._id;
        console.log(url);
        const body = {
            firstname, lastname, email, job_title, location
        }
        console.log(body);
        try{
            fetch(url, {
                method: 'PUT',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                accept: "application/json",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            }).then((response) => {
                response.json()
                .then((data) => {
                    props.getProfiles();
                    $('#editModal').modal('hide');
                })
            })
        }catch(err){

        }
        
    }

    useEffect(() => {
        setup();
    }, [props.currentProfile])

    return(
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form id = 'addForm' onSubmit = {handleSubmit}>
                    <input onChange = {inputChange} id = 'fn_edit' type = 'text' ></input>
                    <input onChange = {inputChange} id = 'ln_edit' type = 'text' ></input>
                    <input onChange = {inputChange} id = 'em_edit' type = 'text' ></input>
                    <input onChange = {inputChange} id = 'jt_edit' type = 'text' ></input>
                    <input onChange = {inputChange} id = 'lo_edit' type = 'text' ></input>
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