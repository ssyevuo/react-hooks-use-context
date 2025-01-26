//useState here is used to create a user state variable as well as a setter function
import React, { useState } from "react";

//creating the context
const UserContext = React.createContext();

//creating a provider component

//the provider component makes the context value available to all components within it
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    //const currentUser = {
     //   name: 'Duane',
      //  interests: ['Coding', 'Biking', "Words ending in 'ing'"],
    //};
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider};