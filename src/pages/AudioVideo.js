import audio from '../../src/resources/music.mp3';
import "../estilos/paginas.css"
export default function AudioVideo(){

    return(
        <>
            <section class="mt-5 container">
                <div class="row  text-center">
                    <div class="col col-sm-12 ratio ratio-16x9" id="viframe">
                        <iframe
                            class="embed-responsive-item"
                            width="150px"
                            src="https://www.youtube.com/embed/LYU-8IFcDPw" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div class="col">
                        <audio controls>
                            <source src={audio}></source>
                        </audio>
                    </div>
                </div>
            </section>
        </>
    );
}