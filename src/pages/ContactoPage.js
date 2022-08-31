import '../styles/components/pages/ContactoPage.css'
import React,{Fragment,useState} from "react";
import axios from "axios";


const ContactoPage = (props) => {
  
    const[sending,setSending] = useState(false);
    const [disable, setDisable] = React.useState(false);

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        mensaje: ' ',
        telefono:''
    })


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault();
        console.log('enviando datos...' + datos.nombre + ' ' + datos.email + '' + datos.telefono +" "+ datos.mensaje);
        setSending(true);
        const response = await  
        axios.post('http://localhost:3000/api/contacto',datos);
          setSending(false);
          //setMsg(response.data.message);
          console.log(response.data);
          if (response.data.error === false){
              console.log("Error Al Enviar");
          }
        
         event.target.reset();

    
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <main className="holder contacto">
            <form  className="formulario" onSubmit={enviarDatos} >
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" placeholder="email" className="form-control" onChange={handleInputChange} name="email"></input>
                </p>
                <p>
                    <label for="mensaje"> Mensaje </label>
                    <input type="texarea" placeholder="mensaje" className="form-control" onChange={handleInputChange} name="mensaje"></input>
                </p>
                <p>
                    <label for="telefono">Telefono</label> 
                    <input type="text" placeholder="telefono" className="form-control" onChange={handleInputChange} name="telefono"></input>
                </p>
                <button type ="sbumit" className="btn btn-primary" >Enviar </button>
            </form>
           { sending ? "Mensaje Enivado" : null} 
            
         </main>   
        </Fragment>
    );
}

export default ContactoPage;