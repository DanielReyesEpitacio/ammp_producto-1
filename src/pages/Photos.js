import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Photos(props){
    return(
      <section class="bg-dark mt-5">
        <Carousel>
      {props.data.map((elem, index) => (
        
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={elem}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Foto: {index}</h3>
              <p>Elmero mero sabor ranchero</p>
            </Carousel.Caption>
          </Carousel.Item>
        
      ))}
      </Carousel>
      </section>
    );
}