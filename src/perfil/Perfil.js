import { useState } from "react";
import "./perfil.css";
function Perfil(){
    const variables={
        name: 'Auner Anival Alvarez Dubon',
        age: 24,
        bio: 'Arriesgate y atrevete al fin la vida es una',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png', 
    }

    const [valores, setValores]=useState(variables);

    return(
        <div className="profile">
        <img src={valores.imageUrl} alt="Profile" />
        <div className="profile-details">
          <h2>{valores.name}</h2>
          <p>Age: {valores.age}</p>
          <p>Bio: {valores.bio}</p>
        </div>
      </div>
    )
}

export default Perfil;


