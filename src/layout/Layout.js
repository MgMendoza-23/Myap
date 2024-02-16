//import { Children } from "react";
import BarraMenu from "../components/BarraMenu"
function Layout({Children}){
    return(
        <div>
            <div className="container">
                <div>
                <BarraMenu/>
                </div>
            </div>
            <div>
                {Children}
            </div>
        </div>
    )
}
export default Layout;