import React from 'react';

const NovedadItem=(props) =>{
   const{title,subtitle,imagen,body} = props;
   console.log(title);
   return(
       <div className ="holder">
            <h1>{title}</h1>  
            <h2>{subtitle }</h2>
            <img src={imagen}/>
             <div dangerouslySetInnerHTML={{__html:body}} />
            <hr />   
       </div>    
    );
}
export default NovedadItem;