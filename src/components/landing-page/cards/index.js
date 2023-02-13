import './style.css'

function Cards(props) {
    const { title, desc, img } = props;
    console.log(props)
    return (
        <div className="center-card" id='section-3'>
            <div className="card">
                <h2>{title}</h2>
                <img className='card-img' src={img} alt="img" />
                <p className='card-para'>{desc}</p>
            </div>
        </div>
    )
}
export default Cards;