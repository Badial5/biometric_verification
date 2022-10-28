import React from 'react'

//pasage
import '@passageidentity/passage-elements/passage-auth'
import '@passageidentity/passage-elements/passage-login'
import '@passageidentity/passage-elements/passage-register'
import '@passageidentity/passage-elements/passage-profile'


const Home = () => {
  return (
    
  <div className='authContainer'>
  {/* <passage-auth app-id="TXX4zah4O9drt6F512cltxLF">
  "default-country-code="gh"
  </passage-auth> */}

<passage-auth app-id="8T2iuhDgiOpkz7PWGnFkCqXb" default-country-code="gh">

</passage-auth>
</div>
    

   
  );
}

export default Home
