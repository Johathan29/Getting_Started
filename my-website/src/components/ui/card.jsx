    // src/components/Card.jsx
    import React from 'react';
import CardList from '../cardList';

    function Card({ title, description }) {
      return (
        
        <div className="" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px',marginBottom:'4px',width:'auto' }}>
          <a href='#ancla'>
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
        </div>
        
      );
    }

    export default Card; // Export the component