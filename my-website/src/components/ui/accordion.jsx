import React from 'react';
import clsx from 'clsx';
import style from '../ui/card.module.css'
function Accordion({summary,content}){
return(
<details className={clsx('accordion',style.accordion)}>
    <summary>{summary}</summary>
    <h2 id="#heading-id">{content}</h2>

Some content...

</details>
)
}
export default Accordion;