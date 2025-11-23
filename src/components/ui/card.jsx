    // src/components/Card.jsx
    import React from 'react';
import CardList from './cardList';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import style from './card.module.css'
    function Card({ title, description,slug }) {
      return (
        
        <div className={clsx('col col--3 card', style.card)} >
          <a href={slug} className={clsx('cardLink', style.cardLink)}>
            <h3>{title}</h3>
            <p className={clsx('cardDescription', style.cardDescription)} >{description}</p>
          </a>
        </div>
        
      );
    }

    export default Card; // Export the component