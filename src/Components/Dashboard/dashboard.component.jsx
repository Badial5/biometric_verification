import { useCurrentUser } from "../../Hooks/userCurrentUser.component";

import "./dashboard.styles.scss"

const Dashboard = () => {
    const {isLoading, isAuthorized, username} = useCurrentUser();

    if (isLoading) {
        return null;
    }
    const authorizedBody = 
    <>
        You successfully signed into Your dashboard
        <br/><br/>
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
          <h1 style={{textAlign: "center"}}>LOGIN SUCCESSFUL</h1>
            <div className='title'>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div className='message'>
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    );

}

export default Dashboard;