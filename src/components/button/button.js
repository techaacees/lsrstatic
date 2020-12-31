import React from 'react';
import {Link}from 'react-router-dom'
const Button = (props) => {
   let buttonTemplate = ''
   switch(props.type){
       case('primary'):
       buttonTemplate = ''
       break
       case('secondary'):
       buttonTemplate = (
           <Link to = "/about">
                <button>{props.text}</button>
           </Link>
        
         )
       break
       default:
       buttonTemplate = ''
   }
   return buttonTemplate
};

export default Button;