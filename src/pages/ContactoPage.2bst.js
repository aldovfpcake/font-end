import '../styles/components/pages/ContactoPage.css'
import React,{Fragment,useState} from "react";
import axios from "axios";


const ContactoPage2 = (props) => {

       
    const initialForm = {
       nombre:'',
       email:'',
       telefono: '',
       mensaje:''

    }
    const[sending,setSending] = useState(false);
    const[msg,setMsg]=useState(' ');
    const[formData,setFormData] = useState(initialForm);



const handleInputChange = e =>{
      const{name,value} = e.target;
      setFormData(oldData => ({
		oldData,
		[name]: value
		}));
}		




const handleSubmit= async e =>{
    e.preventDefault();
	setMsg(' ');
	setSending(true);
    debugger;
    console.log(formData);
	const response = await 
          axios.post('http://localhost:3000/api/contacto',formData);
          setSending(false);
          setMsg(response.data.message);
          if (response.data.error === false){
              setFormData(initialForm)
          }
}		
        

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-3">
                    <input type="text" placeholder="nombre" className="form-control" onChange={handleInputChange} name="nombre" value ={formData.nombre}></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="email"  className="form-control" onChange={handleInputChange} name="email"value ={formData.email}></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="telefono"  className="form-control" onChange={handleInputChange} name="telefono"value ={formData.telefono}></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="mensaje" className="form-control" onChange={handleInputChange} name="mensaje"value ={formData.mensaje}></input>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            {sending ? "Mensaje Enivado" : null}
            {msg ? <p>{msg}</p> : null}
        </Fragment>
    );
}
 


export default ContactoPage2;