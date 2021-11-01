import React, {useState, useEffect} from 'react';
import Profile from './profile'
import AddModal from './modals/addModal';
import EditModal from './modals/editModal';
import DelModal from './modals/deleteModal';
import backendURL from '../variables/variables';

export default function Directory(props){
    const [profiles, setProfiles] = useState([]);
    // const [message, setMessage] = useState('');

    const [currentProfile, setCurrentProfile] = useState();

    // const [jwtToken, setToken] = useState('');


    // const getJWTToken = () => {
    //     const url = 'http://192.168.1.241:8080/jwt'
    //     fetch(url, {
    //         method: 'GET',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         accept: "application/json",
    //         headers: {
    //             "Content-Type": 'application/json',
    //         }
    //     }).then((response) => {
    //         response.json()
    //         .then((data) => {
    //             setToken(data);
    //             console.log(jwtToken);
    //         })
    //     })
    // }

    const getProfiles = async() => {
        const url = backendURL + '/people';
        try{
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                accept: "application/json",
                headers: {
                    "Content-Type": 'application/json',
                }
            }).then((response) => {
                response.json()
                .then((data) => {
                    console.log(data);
                    setProfiles(data);
                });
            });
        }catch(err){
            console.log(err);
        }
    }

    
   
    useEffect(() => {
        getProfiles();
        
    }, [])

    return(
        <div className = "directory">
            <div className = 'container'>
            {
                (profiles != null) ? profiles.map((profile) => <Profile key = {profile._id} setCurrentProfile = {setCurrentProfile} profile = {profile}/>) : <div><h3>No Profiles to Display</h3></div>
            }


            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
            New Profile
            </button>


            <AddModal getProfiles = {getProfiles}/>
            <EditModal getProfiles = {getProfiles}  currentProfile = {currentProfile}/>
            <DelModal getProfiles = {getProfiles} currentProfile = {currentProfile}/>


            </div>

            

        </div>
    )
}