
export default function Nav(props){

    const handleClick = () => {
        
    }

    return(
        <nav className = 'navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className = "container-fluid">
                <h3 className = "navbar-brand">MyHR</h3>
                {
                    (props.loggedIn != true) ? <button onClick = {handleClick}>Login</button> : null
                }
            </div>
        </nav>
    )
}