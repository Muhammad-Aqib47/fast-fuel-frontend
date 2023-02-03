import './style.css'

function Video() {
    return (
        <div id='section-2'>
            <section className="vid-center" >
                <h2 className='vid-heading'><span className='vid-heading-span'>How It Works</span></h2>
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

