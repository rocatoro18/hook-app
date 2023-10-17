import { useState } from "react"
import { UserContext } from "./context/UserContext"

/*
const user = {
    id: 18,
    name: 'Roberto Torres',
    email: 'robertoctr99@gmail.com'
}
*/

export const UserProvider = ({children}) => {

    const [user,setUser] = useState();

    return (
       //<UserContext.Provider value={{Hola: 'Mundo', user:user}}>
        <UserContext.Provider value={{user, setUser}}>
        {children}
       </UserContext.Provider>
    )
}