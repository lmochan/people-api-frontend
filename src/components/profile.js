
export default function Profile(props){
    const passID = () => {
        props.setCurrentProfile(props.profile);
    }
    return(
        <div className = 'profile row'>
            <div className = 'card'>
                <div className = 'card-body'>
                    <h5 className = 'card-title'>{props.profile.firstname} {props.profile.lastname}</h5>
                    <p className = 'card-text'><b>Email:</b> {props.profile.email}</p>
                    <p className = 'card-text'><b>Job Title:</b> {props.profile.job_title}</p>
                    <p className = 'card-text'><b>Location:</b> {props.profile.location}</p>
                </div>
                <div className = 'card-footer'>
                    <button onClick = {passID} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                    <button onClick = {passID} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#delModal">Delete</button>

                </div>
            </div>
        </div>
    )
}