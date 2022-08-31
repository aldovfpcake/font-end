
import '../styles/components/pages/ContactoPage.css'

import React from "react";

const ContactoPage =(props)=>{
      return(
        <main className="holder contacto">
           <div>
             <h2>Contacto Rápido</h2>
             <form action= " " method=" " className="formulario">
                 <p>
                    <label for="nombre">Nombre</label> 
                    <input type="text" name="" />  
                  </p> 
                  <p>
                    <label for="email">E-Mail</label> 
                    <input type="text" name="" />  
                  </p>  
                  <p>
                    <label for="telefono">Telefono</label> 
                    <input type="text" name="" />  
                  </p> 
                  <p>
                    <label for="mensaje">Telefono</label> 
                    <input type="text" name="" /> 
                  </p>
                  <p class="acciones"><input type ="submit" value="Enviar"/></p> 
            </form>
           </div>
           <div class="datos">
              <h2> Otras vias de comunicación</h2>
              <p>También puede contactarse con nosotros usando los siguientes medios</p>
              <ul>
                  <li> Teléfono : 43242388</li>
                  <li> Emial : contacto@transportesx.com.ar</li>
                  <li> Faceebook :</li>
                  <li> Twitter:</li>
              </ul>
           </div>
        </main>
        );
}

export default ContactoPage;