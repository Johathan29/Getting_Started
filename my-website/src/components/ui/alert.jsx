    // src/components/Alert.jsx
import React from 'react';
import clsx from 'clsx';
const className=[
    {
        type:'Caution',
        class:'alert alert--warning'
        
    }
]

    function Alert({ title, description,icon,type }) {
      return (
        
        <div className={clsx('Alert Alert--danger')} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px',marginBottom:'4px',width:'auto' }}>
          
            <h3>{title}</h3>
            <p>{description}</p>
          
        </div>
        
      );
    }

    export default Alert; // Export the component