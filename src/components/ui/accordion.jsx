import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from '../ui/card.module.css'
import Translate from '@docusaurus/Translate';
function Accordion({summary,content}){
  /*  const [contentApi,setPosts]=useState([])
   
        const getdata=async()=>{
        await fetch('https://dummyjson.com/users/') // Reemplaza con la URL correcta
          .then(response => response.json())
          .then(data => setPosts(data));
        
        }
        getdata();
 
    console.log(contentApi)*/
return(
    <>
    <Translate
    id="homepage.title"
    description="The homepage welcome message">
    Welcome to my website
  </Translate>
  {/*contentApi.map((item,index)=>(
  <p key={index}>
    {item.firstName}
  </p>
  ))*/}
<details className={clsx('accordion',style.accordion)}>
    <summary>{summary}</summary>
    <h2 id="#heading-id">{content}</h2>

Some content...

</details>
</>
)
}
export default Accordion;