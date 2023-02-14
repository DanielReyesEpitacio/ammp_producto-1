import audio from '../../src/resources/music.mp3';
export default function AudioVideo(){

    return(
        <>
            <section class="mt-5">
                <div class="row  text-center">
                    <div class="col embed-responsive embed-responsive-16by9">
                        <iframe
                            class="embed-responsive-item"
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