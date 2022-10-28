import { useCurrentUser } from "../../Hooks/userCurrentUser.component";

import "./dashboard.styles.scss"


function Dashboard() {
    //destructuring

    const {isLoading, isAuthorized,
         username, first_name, last_name, 
        country, date_of_birth} = useCurrentUser();

    if (isLoading) {
        return null;
    }
    const authorizedBody = 
    <>
        You successfully signed into Your Dashboard using your biometric ID:

        <br/><br/>
        <p>These are Your details: </p>

        First Name: <b>{first_name}</b> <br />
        
        Last Name: <b>{last_name}</b> <br />

        Date of birth: <b>{date_of_birth}</b> <br />

       

        Country of Origin: <b>{country}</b> <br />

        Your email is: <b>{username}</b>
        
    </>

    const unauthorizedBody = 
    <>
        You have not logged in and cannot view the dashboard.
        <br/><br/>
        <a href="/" className='link'>Login to continue.</a>
    </>

    return (
        <div className='dashboard'>
            <div className='title'>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div className='message'>
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    );

}

export default Dashboard;