import React from "react";
import css from './Info.css';

class Info extends React.Component {
    render(){
        return (

            <div className={css.info}>
                <h3 className={css.tittle}>Implementa en tu empresa lo último en sitios web y aplicaciones móviles </h3>
                <hr/>
                <p className={css.text}>
                    En Fixter puedes encontrar la solucion a tus problemas tecnologicos, marketing digital, y mas. En Fixter puedes encontrar la solucion a tus problemas tecnologicos, marketing digital, y mas.En Fixter puedes encontrar la solucion a tus problemas tecnologicos, marketing digital, y mas.
                </p>
                <div className={css.image}></div>
            </div>

        );
    }
}

export default Info;

