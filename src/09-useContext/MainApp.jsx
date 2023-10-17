import { Outlet} from "react-router";
import { Navbar } from "./NavBar";
import { UserProvider } from "./UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
        <Navbar/>
        <hr/>
        <Outlet/>
        </UserProvider>
    )
}
