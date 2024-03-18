import { useEffect, useState } from "react";
import "./perfil.css";
function Perfil(){
    const variables={
        name: 'Auner Anival Alvarez Dubon',
        age: 24,
        bio: 'Arriesgate y atrevete al fin la vida es una',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png', 
    }

    const [valores, setValores]=useState(variables);
    const [dePerfil, setDePerfil]=useState([]);

    const datosPerfil=async()=>{
      //const buscar=await Axios.get("/perfil");
      //setDePerfil(buscar.data);
    }

    useEffect(()=>{
datosPerfil();
    },[])

    return(
        <div className="profile">
        <div className="profile-details">
          {
            dePerfil.map((datos)=>{
              return(
                <>
                <img src={valores.imageUrl} alt="Profile" />
                        <h2>{datos.name}</h2>
                        <p>Edad: {valores.age}</p>
                        <p>Descripcion: {valores.bio}</p>
                        </>
              )
            })
          }
        
        </div>
      </div>
    )
}

export default Perfil;