import clsx from "clsx";
import style from '../ui/card.module.css'
export default function Cards({title, description,classname}) { (
    <section className={clsx("a",classname)}>

   
    <div className={clsx("col col--4", style.Card)}>
        <h2
       className="text--center"
        onClick={() => {
            alert(`You clicked the color  with label `)
        }}>
        {title}
        </h2>
        <span className="text--center padding-horiz--md">
            {description}
        </span>
    </div>
    </section>
  );
    }