import backendURL from "../../variables/variables";
const $ = window.$;
export default function DelModal(props){



    const delProfile = () => {
        const url = backendURL + '/people/delete/' + props.currentProfile._id;
        console.log(url);
        try{
            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                accept: "application/json",
                headers: {
                    "Content-Type": 'application/json'
                },
            }).then((response) => {
                response.json()
                .then((data) => {
                    props.getProfiles();
                    $('#delModal').modal('hide');
                })
            })
        }catch(err){

        }
        
    }

    const close = () => {
        $('#delModal').modal('hide');
    }

    return(
        <div className="modal fade" id="delModal" tabIndex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this profile?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <button className="btn btn-secondary" onClick = {delProfile}>Yes</button>
                    <button className="btn btn-secondary" onClick = {close}>Cancel</button>
                </div>
                </div>
            </div>
        </div>
    )
}