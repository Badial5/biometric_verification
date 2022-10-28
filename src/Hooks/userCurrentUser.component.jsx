import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';

export function useCurrentUser() {
    const [result, setResult] = useState({
        isLoading: true,
        isAuthorized: false,
        username: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        country: '',
        phone_number: ''
    });

    useEffect(() => {
        let cancelRequest = false;
        new PassageUser().userInfo().then(userInfo=> {
            
            //if the user cancel the auth, then the app
            //should return
            if( cancelRequest ) {
                return;
            }

            //if the user couldnt complete the verification
            //it should not authorized the user and thus return
            if(userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username: "",
                });
                return;
            }

            // it the user is able to authenticate
            //then return his info
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
                // first_name: userInfo.first_name ? userInfo.first_name : userInfo.phone
                first_name: userInfo.user_metadata.first_name,
                last_name: userInfo.user_metadata.last_name,
                date_of_birth: userInfo.user_metadata.date_of_birth,
                country: userInfo.user_metadata.country,
                phone_number: userInfo.user_metadata.phone_number

            });
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}