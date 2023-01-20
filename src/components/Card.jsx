import style from "./componentes/estilos.module.css";
import {Link} from "react-router-dom"

export default function Card({name,species,gender,image,onClose, id}) {
   return (
      <div className={style.card}>
         <button className={style.botonX} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
           <h2>{name}</h2>
         </Link>
         <img  src={image} alt={name} />
         <div style={{color:"grey"}}>
           <h2 >{species}</h2>   
           <h2>{gender}</h2>
         </div>
      </div>
   );
}
