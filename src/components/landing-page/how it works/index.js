import './style.css'

function Video() {
    return (
        <div>
            <section class="vid-center" id='section-2'>
                <h2>How It Works</h2>
                <p>Some text describing the video</p>
                <video width="400" height="240" controls>
                    <source src="./video/fuel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
          
         </div>
    );
}
export default Video;

