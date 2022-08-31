import React,{useState,useEffect} from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";

const NovedadesPage =(props) =>{
    const[loading,setLoading] = useState(false);
    const[novedades, setNovedades] = useState([]);
    useEffect(()=>{
       const cargarNovedades = async() => {
             setLoading(true);
             const response = await axios.get('http://localhost:3000/api/novedades');
             setNovedades(response.data);
             setLoading(false);
              };
              cargarNovedades();
    },[]);
    debugger;
   // novedades.map((item,index,array) =>{ if(index =novedades.length){console.log(item)} ; return array});
   // novedades.map((item,index) => {console.log(novedades[index].novedades['titulo']); return 0});
      return(
        
        <section className="holder">
            <h2>Novedades</h2>
            { loading ? (
                <p> Cargando </p>
            ):(
                novedades.map((item,key) =><NovedadItem  key={novedades[key]['novedades']['id']}
                    title={novedades[key]['novedades']['titulo']} subtitle={novedades[key]['novedades']['subtitulo']}     
                    imagen={novedades[key]['novedades']['imagen']} body={novedades[key]['novedades']['cuerpo']}/>)           
                )  
            }   
        </section>
       );
        
        } 
export default NovedadesPage;


