import React from "react";
import "../estilos/header.css"
export default function Header(){

    return(
        <header class="container mt-5 text-light" id="dre">
            <div class="row">
                <div class="col-2" >
                    <h1>DRE</h1>
                </div>
                <div class="col-10">
                    <h1>Wiki Pokemón</h1>
                </div>
            </div>
        </header>
    );
}