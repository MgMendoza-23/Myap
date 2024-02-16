import {Routes, Route} from "react-router-dom";
import Datos from "../components/Datos";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Lista from "../components/Lista";
function Rutas(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/datos" element={<Lista/>} />
            </Routes>
        </Layout>
    )
}
export default Rutas;