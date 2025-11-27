    // src/components/Alert.jsx
import React from 'react';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFire,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


    function Alert({ title, description,icon,type }) {
      const className=[
        {
            type:type,
            class:'alert alert--'+ type+'',
            title: title,
            icon:type==='danger'? faFire : type==='warning'? faExclamationCircle : "",
            description:description
            
        }
    ]
    console.log(className.map(item=> item.title))
      return (
        
       className.map((item)=> (
        <div id="alert-1" className={"block space-y-1 w-full sm:items-center p-4 mb-4 text-sm shadow-md shadow-gray-500/40 rounded-md alert alert--"+type +""} role="alert">
          <div className='flex items-center gap-1 font-bold'>
            <FontAwesomeIcon icon={item.icon} className='w-4 text-[.8rem]'/>
            <span className='text-[0.7rem]'>{item.type}</span>
          </div>
        <span class="sr-only">Info</span>
        <h4 className='text-[1.2rem] mx-8 '>{item.title}</h4>
        <div class="ms-10 text-sm ">
          {item.description}
        </div>
         
      </div>
       ))
      );
    }

    export default Alert; // Export the component