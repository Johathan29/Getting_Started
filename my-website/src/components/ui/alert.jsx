    // src/components/Alert.jsx
import React from 'react';
const className=[
    {
        type:'Caution',
        class:'alert alert--warning'
        
    }
]

    function Alert({ title, description,icon,type }) {
      return (
        
        <div className={className.class} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px',marginBottom:'4px',width:'auto' }}>
          <a href='#ancla'>
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
        </div>
        
      );
    }

    export default Alert; // Export the component